"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const ApiController = (...tags) => (0, common_1.applyDecorators)((0, swagger_1.ApiTags)(...tags), (0, swagger_1.ApiBearerAuth)());
exports.ApiController = ApiController;
//# sourceMappingURL=api-controller.js.map