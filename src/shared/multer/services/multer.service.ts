import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { InjectRepository } from '@nestjs/typeorm';
import { readdir, unlink, writeFile } from 'fs/promises';
import { join, resolve } from 'path';
import { Repository } from 'typeorm';
import { v1 as uuidv1 } from 'uuid';

import { User } from '@entities';
import { PUBLIC_PATH } from '@models/constants';

import type { IUserImages } from '../models';

@Injectable()
export class MulterService {
  private _logger: Logger = new Logger(MulterService.name);
  private readonly _ignoreFileName: Readonly<string> = '.gitkeep' as const;
  private readonly _filesFolder: Readonly<string> = 'files' as const;

  constructor(
    @InjectRepository(User)
    private readonly _userRepository: Repository<User>,
  ) {}

  async bufferWithImageToFilePath(buffer: Buffer): Promise<string> {
    const fileName = `${uuidv1()}.webp`;

    await writeFile(resolve(PUBLIC_PATH, this._filesFolder, fileName), buffer);

    return join(this._filesFolder, fileName);
  }

  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  private async _removeUnusedFiles(): Promise<void> {
    this._logger.verbose('START: actualize files');

    // user
    const userImages = await this._userRepository
      .createQueryBuilder()
      .select([
        'IFNULL(GROUP_CONCAT(avatar), "") AS avatars',
        'IFNULL(GROUP_CONCAT(profileBackground), "") AS profileBackgrounds',
      ])
      .getRawOne<IUserImages>();

    const pathsAsArray = `${userImages.avatars},${userImages.profileBackgrounds}`.split(',').filter(Boolean);

    const filesInFolder = await readdir(resolve(PUBLIC_PATH, this._filesFolder));
    const filesWithoutIgnore = filesInFolder.filter(file => file !== this._ignoreFileName);

    if (filesWithoutIgnore.length) {
      for (const file of filesWithoutIgnore) {
        if (!pathsAsArray.includes(file)) {
          await unlink(resolve(PUBLIC_PATH, 'files', file));

          this._logger.verbose(`INFO: "${file}" removed!`);
        }
      }
    }

    this._logger.verbose('FINISH: actualize files');
  }
}
