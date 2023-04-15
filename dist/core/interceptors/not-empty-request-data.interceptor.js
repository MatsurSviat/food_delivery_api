"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotEmptyRequestDataInterceptor = void 0;
const common_1 = require("@nestjs/common");
class NotEmptyRequestDataInterceptor {
    intercept(context, next) {
        const request = context.switchToHttp().getRequest();
        const isEmpty = [request.body, request.file, request.files]
            .map((data) => Object.keys(data || {}).length)
            .every((dataLength) => dataLength === 0);
        if (isEmpty) {
            throw new common_1.BadRequestException('Data from dody cannot be empty!');
        }
        return next.handle();
    }
}
exports.NotEmptyRequestDataInterceptor = NotEmptyRequestDataInterceptor;
//# sourceMappingURL=not-empty-request-data.interceptor.js.map