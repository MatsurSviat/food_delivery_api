"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileFieldsToBodyInterceptor = void 0;
const common_1 = require("@nestjs/common");
let FileFieldsToBodyInterceptor = class FileFieldsToBodyInterceptor {
    intercept(context, next) {
        const req = context.switchToHttp().getRequest();
        const files = req.files;
        const fileFields = Object.keys(files);
        if (req.body && fileFields.length) {
            fileFields.forEach(field => {
                req.body[field] = files[field];
            });
        }
        return next.handle();
    }
};
FileFieldsToBodyInterceptor = __decorate([
    (0, common_1.Injectable)()
], FileFieldsToBodyInterceptor);
exports.FileFieldsToBodyInterceptor = FileFieldsToBodyInterceptor;
//# sourceMappingURL=file-fields-to-body.interceptor.js.map