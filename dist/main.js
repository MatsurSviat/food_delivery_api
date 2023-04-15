"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const compression = require("compression");
const pipes_1 = require("./core/pipes");
const constants_1 = require("./models/constants");
const config_1 = require("./shared/config");
const app_module_1 = require("./app.module");
function configureApplication(app, { clientUrl }) {
    app
        .setGlobalPrefix('api')
        .useGlobalPipes(new pipes_1.AppValidationPipe())
        .useStaticAssets(constants_1.PUBLIC_PATH)
        .use(compression())
        .enableCors({
        credentials: true,
        origin: [clientUrl],
    });
}
function configureSwagger(app, { swaggerConfig: { title, description, path } }) {
    const config = new swagger_1.DocumentBuilder().setTitle(title).setDescription(description).addBearerAuth().build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup(path, app, document);
}
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = app.get(config_1.AppConfigService);
    const configs = [configureApplication, configureSwagger];
    for (const configureCallback of configs) {
        configureCallback(app, config);
    }
    await app.listen(config.port);
}
bootstrap();
//# sourceMappingURL=main.js.map