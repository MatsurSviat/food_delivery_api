import { Logger } from '@nestjs/common';
import * as process from 'process';
import { DataSource } from 'typeorm';

import { configService } from '../data-source';

class InitDatabase {
  #logger = new Logger(InitDatabase.name);
  #client: DataSource;

  constructor() {
    const options = { ...configService.databaseConfig, database: 'sys' };

    this.#client = new DataSource(options);
  }

  async execute(): Promise<void> {
    await this.#connect();
    await this.#createDBIfNotExists();
    await this.#disconnect(0);
  }

  async #connect(): Promise<void> {
    try {
      await this.#client.initialize();

      this.#logger.log('Connected');
    } catch (e) {
      this.#logger.error(`CONNECTION ERROR: ${e}`.replace(' error: ', ' '));

      await this.#disconnect(1);
    }
  }

  async #disconnect(code: number): Promise<void> {
    try {
      await this.#client.destroy();
      process.exit(code);
    } catch (e) {
      process.exit(1);
    }
  }

  async #createDBIfNotExists(): Promise<void> {
    try {
      await this.#client.query(`CREATE DATABASE IF NOT EXISTS ${configService.databaseConfig.database}`);

      this.#logger.log('Project DB has been initialized.');
    } catch (e) {
      this.#logger.error(`QUERY FAILED: ${e}`);

      await this.#disconnect(1);
    }
  }
}

new InitDatabase().execute();
