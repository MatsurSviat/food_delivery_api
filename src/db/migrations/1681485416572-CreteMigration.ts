import type { MigrationInterface, QueryRunner } from "typeorm";

export class CreteMigration1681485416572 implements MigrationInterface {
    name = 'CreteMigration1681485416572'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`couriers\` (\`id\` varchar(36) NOT NULL, \`identityNumber\` int NOT NULL, \`name\` varchar(255) NOT NULL, \`photo\` varchar(255) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`meals\` (\`id\` varchar(36) NOT NULL, \`img\` varchar(255) NULL, \`title\` varchar(255) NULL, \`description\` varchar(255) NULL, \`price\` int NULL, \`taste\` varchar(255) NULL, \`category\` varchar(255) NULL, \`cookTime\` int NULL, \`rating\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`order_items\` (\`id\` varchar(36) NOT NULL, \`count\` int NOT NULL, \`mealId\` varchar(36) NULL, \`orderId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` varchar(36) NOT NULL, \`userName\` varchar(255) NOT NULL, \`photo\` varchar(255) NULL, \`email\` varchar(320) NOT NULL, \`password\` varchar(255) NOT NULL, \`adress\` varchar(255) NULL, UNIQUE INDEX \`IDX_97672ac88f789774dd47f7c8be\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`orders\` (\`id\` varchar(36) NOT NULL, \`deliveryCost\` int NOT NULL, \`deliveryTime\` int NOT NULL, \`completed\` tinyint NOT NULL, \`customerId\` varchar(36) NULL, \`courierId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user_favorite_meal\` (\`usersId\` varchar(36) NOT NULL, \`mealsId\` varchar(36) NOT NULL, INDEX \`IDX_7c2ba623a0c0954d4d9e4264b8\` (\`usersId\`), INDEX \`IDX_ad5c20ac2d611ea709ef24a94b\` (\`mealsId\`), PRIMARY KEY (\`usersId\`, \`mealsId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`order_items\` ADD CONSTRAINT \`FK_da91458b690bc7af4ce36da6766\` FOREIGN KEY (\`mealId\`) REFERENCES \`meals\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`order_items\` ADD CONSTRAINT \`FK_f1d359a55923bb45b057fbdab0d\` FOREIGN KEY (\`orderId\`) REFERENCES \`orders\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`orders\` ADD CONSTRAINT \`FK_e5de51ca888d8b1f5ac25799dd1\` FOREIGN KEY (\`customerId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`orders\` ADD CONSTRAINT \`FK_76eaffec5e36a04bbf3bf549146\` FOREIGN KEY (\`courierId\`) REFERENCES \`couriers\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user_favorite_meal\` ADD CONSTRAINT \`FK_7c2ba623a0c0954d4d9e4264b89\` FOREIGN KEY (\`usersId\`) REFERENCES \`users\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`user_favorite_meal\` ADD CONSTRAINT \`FK_ad5c20ac2d611ea709ef24a94b8\` FOREIGN KEY (\`mealsId\`) REFERENCES \`meals\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user_favorite_meal\` DROP FOREIGN KEY \`FK_ad5c20ac2d611ea709ef24a94b8\``);
        await queryRunner.query(`ALTER TABLE \`user_favorite_meal\` DROP FOREIGN KEY \`FK_7c2ba623a0c0954d4d9e4264b89\``);
        await queryRunner.query(`ALTER TABLE \`orders\` DROP FOREIGN KEY \`FK_76eaffec5e36a04bbf3bf549146\``);
        await queryRunner.query(`ALTER TABLE \`orders\` DROP FOREIGN KEY \`FK_e5de51ca888d8b1f5ac25799dd1\``);
        await queryRunner.query(`ALTER TABLE \`order_items\` DROP FOREIGN KEY \`FK_f1d359a55923bb45b057fbdab0d\``);
        await queryRunner.query(`ALTER TABLE \`order_items\` DROP FOREIGN KEY \`FK_da91458b690bc7af4ce36da6766\``);
        await queryRunner.query(`DROP INDEX \`IDX_ad5c20ac2d611ea709ef24a94b\` ON \`user_favorite_meal\``);
        await queryRunner.query(`DROP INDEX \`IDX_7c2ba623a0c0954d4d9e4264b8\` ON \`user_favorite_meal\``);
        await queryRunner.query(`DROP TABLE \`user_favorite_meal\``);
        await queryRunner.query(`DROP TABLE \`orders\``);
        await queryRunner.query(`DROP INDEX \`IDX_97672ac88f789774dd47f7c8be\` ON \`users\``);
        await queryRunner.query(`DROP TABLE \`users\``);
        await queryRunner.query(`DROP TABLE \`order_items\``);
        await queryRunner.query(`DROP TABLE \`meals\``);
        await queryRunner.query(`DROP TABLE \`couriers\``);
    }

}
