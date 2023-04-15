"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var AllExceptionFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const exceptionWithMessage = (exception) => typeof exception === 'object' && exception !== null && 'response' in exception;
let AllExceptionFilter = AllExceptionFilter_1 = class AllExceptionFilter {
    constructor(_httpAdapterHost) {
        this._httpAdapterHost = _httpAdapterHost;
        this._logger = new common_1.Logger(AllExceptionFilter_1.name);
    }
    catch(exception, host) {
        const { httpAdapter } = this._httpAdapterHost;
        const ctx = host.switchToHttp();
        const httpStatus = exception instanceof common_1.HttpException ? exception.getStatus() : common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        const message = exceptionWithMessage(exception) ? exception.response.message : 'Internal server error';
        const responseBody = {
            statusCode: httpStatus,
            message,
            timestamp: new Date().toISOString(),
            path: httpAdapter.getRequestUrl(ctx.getRequest()),
        };
        this._logger.error(`Date: ${responseBody.timestamp} - Status: ${responseBody.statusCode} - Message: ${responseBody.message} - Url: ${responseBody.path}`);
        httpAdapter.reply(ctx.getResponse(), responseBody, httpStatus);
    }
};
AllExceptionFilter = AllExceptionFilter_1 = __decorate([
    (0, common_1.Catch)(),
    __metadata("design:paramtypes", [core_1.HttpAdapterHost])
], AllExceptionFilter);
exports.AllExceptionFilter = AllExceptionFilter;
//# sourceMappingURL=all-exception.filter.js.map