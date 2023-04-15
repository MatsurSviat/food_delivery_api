import type { DataSource, EntityManager } from 'typeorm';
import { Logger } from '@nestjs/common';
import * as process from 'process';

import AppDataSource from '../data-source';
import { LOADERS } from './loaders';

class FixtureLoader {
  readonly #logger = new Logger(FixtureLoader.name);
  readonly #loaders = LOADERS;

  async execute(): Promise<void> {
    try {
      this.#logger.verbose('Run fixtures');

      const connection = await FixtureLoader.#createConnections();

      await connection.transaction(async (entityManager: EntityManager) => {
        for (const constructor of this.#loaders) {
          const loader = new constructor();

          await loader.setEntityManager(entityManager).execute();
        }
      });

      this.#logger.verbose('Fixtures successfully loaded.');

      process.exit(0);
    } catch (e) {
      console.log(e);

      this.#logger.error(
        `Failed loading fixtures. Error: message - ${e.message}, parameters - ${e.parameters?.join(', ')}.`,
      );

      process.exit(1);
    }
  }

  static async #createConnections(): Promise<DataSource> {
    return await AppDataSource.initialize();
  }
}

new FixtureLoader().execute();
