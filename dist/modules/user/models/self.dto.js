"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelfDto = void 0;
const openapi = require("@nestjs/swagger");
class SelfDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, email: { required: true, type: () => String }, photo: { required: true, type: () => String } };
    }
}
exports.SelfDto = SelfDto;
//# sourceMappingURL=self.dto.js.map