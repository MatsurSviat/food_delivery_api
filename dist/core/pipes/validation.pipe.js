"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppValidationPipe = void 0;
const common_1 = require("@nestjs/common");
class AppValidationPipe extends common_1.ValidationPipe {
    constructor() {
        super({
            validationError: { value: false, target: false },
            whitelist: true,
            forbidNonWhitelisted: true,
        });
    }
}
exports.AppValidationPipe = AppValidationPipe;
//# sourceMappingURL=validation.pipe.js.map