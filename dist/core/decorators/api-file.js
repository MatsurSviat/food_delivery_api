"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiFile = void 0;
const swagger_1 = require("@nestjs/swagger");
const ApiFile = (options) => (target, propertyKey) => {
    const decoratorOptions = (options === null || options === void 0 ? void 0 : options.isArray)
        ? {
            type: 'array',
            items: {
                type: 'file',
                properties: {
                    [propertyKey]: {
                        type: 'string',
                        format: 'binary',
                    },
                },
            },
        }
        : {
            type: 'file',
            properties: {
                [propertyKey]: {
                    type: 'string',
                    format: 'binary',
                },
            },
        };
    (0, swagger_1.ApiProperty)(decoratorOptions)(target, propertyKey);
};
exports.ApiFile = ApiFile;
//# sourceMappingURL=api-file.js.map