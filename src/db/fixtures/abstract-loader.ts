import type { DeepPartial, EntityManager, ObjectLiteral } from 'typeorm';
import type { Repository } from 'typeorm';
import { Logger, type Type } from '@nestjs/common';

export interface IRelationsOptions<Entity extends ObjectLiteral, RelativeEntity extends ObjectLiteral> {
  relativeEntity: Type<RelativeEntity>;
  relationKey: keyof Entity & string;
}

interface IRelationEntity<Entity extends ObjectLiteral, RelativeEntity extends ObjectLiteral> {
  relationKey: keyof Entity & string;
  relativeEntities: Type<RelativeEntity> | Type<RelativeEntity>[];
}

export abstract class AbstractLoader<Entity extends ObjectLiteral, RelativeEntity extends ObjectLiteral = object> {
  protected entityManager: EntityManager;

  private _logger: Logger;

  setEntityManager(entityManager: EntityManager): this {
    this.entityManager = entityManager;

    return this;
  }

  abstract get entity(): Type<Entity>;

  abstract get data(): Array<DeepPartial<Entity>>;

  abstract get relations(): IRelationsOptions<DeepPartial<Entity>, DeepPartial<RelativeEntity>>[];

  async execute(): Promise<void> {
    this._logger = new Logger(this.entity.name);

    const repository = this.entityManager.getRepository(this.entity);

    if (!repository) {
      throw Error(`Not found repository for '${this.entity.name}' entity.`);
    }

    await (this.relations.length ? this.executeWithRelations(repository) : this.defaultExecute(repository));

    this._logger.verbose('Successfully loaded.');
  }

  protected async defaultExecute(repository: Repository<Entity>): Promise<void> {
    for (const item of this.data) {
      try {
        await repository.insert(item);
      } catch (e) {
        throw e;
      }
    }
  }

  protected async executeWithRelations(repository: Repository<Entity>): Promise<void> {
    for (const item of this.data) {
      const createdRelativeEntities: IRelationEntity<DeepPartial<Entity>, DeepPartial<RelativeEntity>>[] = [];

      for (const { relativeEntity, relationKey } of this.relations) {
        const relativeRepository = this.entityManager.getRepository(relativeEntity);

        if (relationKey in item) {
          const relativeEntities = Array.isArray(item[relationKey])
            ? item[relationKey].map((r: RelativeEntity) => relativeRepository.create(r))
            : relativeRepository.create(item[relationKey]);

          createdRelativeEntities.push({ relationKey, relativeEntities });
          await relativeRepository.save(relativeEntities);
        }
      }

      const data = { ...item } as DeepPartial<Entity>;

      createdRelativeEntities.forEach(
        ({ relationKey, relativeEntities }: IRelationEntity<DeepPartial<Entity>, DeepPartial<RelativeEntity>>) => {
          if (relationKey in data) {
            data[relationKey] = relativeEntities as Entity[typeof relationKey];
          }
        },
      );

      const createdMainEntity = repository.create(data);

      await repository.save(createdMainEntity);
    }
  }
}
