import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { DataSource } from 'typeorm';

import { AppConfigService } from '@shared/config';

import { MIGRATIONS } from './migrations';

config({ path: 'environments/.env' });

export const configService = new AppConfigService(new ConfigService());

export default new DataSource({ ...configService.databaseConfig, migrations: MIGRATIONS });
