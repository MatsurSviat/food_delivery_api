"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const environment_variables_1 = require("./environment-variables");
function validate(config) {
    const validateConfig = (0, class_transformer_1.plainToInstance)(environment_variables_1.EnvironmentVariables, config, { enableImplicitConversion: true });
    const errors = (0, class_validator_1.validateSync)(validateConfig, { skipMissingProperties: true });
    if (errors.length) {
        throw new Error(errors.toString());
    }
    return validateConfig;
}
exports.validate = validate;
//# sourceMappingURL=config.validator.js.map