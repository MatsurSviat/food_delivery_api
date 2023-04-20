import type { MigrationInterface, QueryRunner } from "typeorm";

export class CreateMigration1681750153579 implements MigrationInterface {
  name = "CreateMigration1681750153579";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "couriers" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "identityNumber" integer NOT NULL, "name" character varying NOT NULL, "photo" character varying, CONSTRAINT "PK_141c3ed6f70beb9ddf4ab4a0e86" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "meals" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "img" character varying, "title" character varying, "description" character varying, "price" integer, "taste" character varying, "category" character varying, "cookTime" integer, "rating" integer, CONSTRAINT "PK_e6f830ac9b463433b58ad6f1a59" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "order_items" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "count" integer NOT NULL, "mealId" uuid, "orderId" uuid, CONSTRAINT "PK_005269d8574e6fac0493715c308" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "userName" character varying NOT NULL, "photo" character varying, "email" character varying(320) NOT NULL, "password" character varying(255) NOT NULL, "adress" character varying, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "orders" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "deliveryCost" integer NOT NULL, "deliveryTime" integer NOT NULL, "completed" boolean NOT NULL, "customerId" uuid, "courierId" uuid, CONSTRAINT "PK_710e2d4957aa5878dfe94e4ac2f" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "user_favorite_meal" ("usersId" uuid NOT NULL, "mealsId" uuid NOT NULL, CONSTRAINT "PK_e747712b030ff08381550519868" PRIMARY KEY ("usersId", "mealsId"))`
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_7c2ba623a0c0954d4d9e4264b8" ON "user_favorite_meal" ("usersId") `
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_ad5c20ac2d611ea709ef24a94b" ON "user_favorite_meal" ("mealsId") `
    );
    await queryRunner.query(
      `ALTER TABLE "order_items" ADD CONSTRAINT "FK_da91458b690bc7af4ce36da6766" FOREIGN KEY ("mealId") REFERENCES "meals"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "order_items" ADD CONSTRAINT "FK_f1d359a55923bb45b057fbdab0d" FOREIGN KEY ("orderId") REFERENCES "orders"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "orders" ADD CONSTRAINT "FK_e5de51ca888d8b1f5ac25799dd1" FOREIGN KEY ("customerId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "orders" ADD CONSTRAINT "FK_76eaffec5e36a04bbf3bf549146" FOREIGN KEY ("courierId") REFERENCES "couriers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "user_favorite_meal" ADD CONSTRAINT "FK_7c2ba623a0c0954d4d9e4264b89" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`
    );
    await queryRunner.query(
      `ALTER TABLE "user_favorite_meal" ADD CONSTRAINT "FK_ad5c20ac2d611ea709ef24a94b8" FOREIGN KEY ("mealsId") REFERENCES "meals"("id") ON DELETE CASCADE ON UPDATE CASCADE`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user_favorite_meal" DROP CONSTRAINT "FK_ad5c20ac2d611ea709ef24a94b8"`
    );
    await queryRunner.query(
      `ALTER TABLE "user_favorite_meal" DROP CONSTRAINT "FK_7c2ba623a0c0954d4d9e4264b89"`
    );
    await queryRunner.query(
      `ALTER TABLE "orders" DROP CONSTRAINT "FK_76eaffec5e36a04bbf3bf549146"`
    );
    await queryRunner.query(
      `ALTER TABLE "orders" DROP CONSTRAINT "FK_e5de51ca888d8b1f5ac25799dd1"`
    );
    await queryRunner.query(
      `ALTER TABLE "order_items" DROP CONSTRAINT "FK_f1d359a55923bb45b057fbdab0d"`
    );
    await queryRunner.query(
      `ALTER TABLE "order_items" DROP CONSTRAINT "FK_da91458b690bc7af4ce36da6766"`
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_ad5c20ac2d611ea709ef24a94b"`
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_7c2ba623a0c0954d4d9e4264b8"`
    );
    await queryRunner.query(`DROP TABLE "user_favorite_meal"`);
    await queryRunner.query(`DROP TABLE "orders"`);
    await queryRunner.query(`DROP TABLE "users"`);
    await queryRunner.query(`DROP TABLE "order_items"`);
    await queryRunner.query(`DROP TABLE "meals"`);
    await queryRunner.query(`DROP TABLE "couriers"`);
  }
}
