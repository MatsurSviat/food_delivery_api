## First steps:

1. Run `npm install`;
2. Create your own .env file in the <b>environments</b> folder according to the fields from .env.dist;
3. Run `npm run database:init` for locally initialize database;
4. Run `npm run typeorm:run-migrations` for create started tables in the database (<b>migrations</b> - table with migrations metadata, used by TypeORM; <b>users</b> - table with users; <b>profiles</b> - table with user's profiles; <b>contacts</b> - table with user's contacts);
5. Run `npm run fixtures:load` for add started mock data to the <b>users</b> and <b>users_followers_users</b> tables;
6. Run `npm run start:dev` to start development.

## Structure

* <b>core</b> - common decorators, exception filters, interceptors, middlewares, pipes and validators for app;
* <b>db</b> - everything related to the database;
* <b>models</b> - common classes, constants, enums, interfaces and types for app;
* <b>modules</b> - correctly app modules;
* <b>shared</b> - shared app modules;

## npm commands

* `prebuild` - use for remove dist folder if needed;
* `database:init` - use once for create database;
* `build` - use for build app;
* main command section - common NestJs commands;
* `prettier` - it  must not be started, it is used for the following commands - prettier:*;
* `prettier:check` - use for check code format by prettier;
* `prettier:fix` - use for fix that problems;
* `lint` - use for check some ESLint problems;
* `lint:fix` - use for fix that problems;
* `fixtures:load` - use for load to database mock data;
* `typeorm` - it  must not be started, it is used for the following commands - typeorm:*;
* `typeorm:create-migration` - use for create empty migration file (how use: `npm run typeorm:create-migration --name=MigrationName`);
* `typeorm:generate-migration` - use for generate migration file by entities changes (how use: `npm run typeorm:generate-migration --name=MigrationName`);
* `typeorm:run-migrations` - use for add all migrations to database;
* `typeorm:revert-migation` - use for rollback one migration;
* `drop-db` - use for drop database;
* `full-reload` - combine `drop-db`, `typeorm:run-migrations` and `fixtures:load`;
