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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelfResponse = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
class SelfResponse {
    constructor(partial) {
        Object.assign(this, partial);
    }
}
__decorate([
    (0, class_transformer_1.Expose)({ name: "id" }),
    (0, swagger_1.ApiProperty)({ name: "id" }),
    __metadata("design:type", String)
], SelfResponse.prototype, "user_id", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "userName" }),
    (0, swagger_1.ApiProperty)({ name: "userName" }),
    __metadata("design:type", String)
], SelfResponse.prototype, "user_userName", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "photo" }),
    (0, swagger_1.ApiProperty)({ name: "photo" }),
    __metadata("design:type", String)
], SelfResponse.prototype, "user_photo", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "email" }),
    (0, swagger_1.ApiProperty)({ name: "email" }),
    __metadata("design:type", String)
], SelfResponse.prototype, "user_email", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "adress" }),
    (0, swagger_1.ApiProperty)({ name: "adress" }),
    __metadata("design:type", String)
], SelfResponse.prototype, "user_adress", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], SelfResponse.prototype, "favoriteMelas", void 0);
exports.SelfResponse = SelfResponse;
//# sourceMappingURL=selfResponse.js.map