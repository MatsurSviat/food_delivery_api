"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticatedUser = void 0;
const common_1 = require("@nestjs/common");
exports.AuthenticatedUser = (0, common_1.createParamDecorator)((dataKey = [], ctx) => {
    const request = ctx.switchToHttp().getRequest();
    let data = request.user;
    if (dataKey.length) {
        data = dataKey.reduce((acc, key) => {
            acc[key] = data[key];
            return acc;
        }, {});
    }
    return data;
});
//# sourceMappingURL=authenticated-user.js.map