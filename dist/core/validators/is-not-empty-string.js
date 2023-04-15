"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsNotEmptyString = void 0;
const class_validator_1 = require("class-validator");
function IsNotEmptyString(validationOptions = {}) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'IsNotEmptyString',
            target: object.constructor,
            propertyName,
            options: Object.assign(Object.assign({}, validationOptions), { message: 'Value must be a string and this string cannot be empty' }),
            validator: {
                validate: (value) => {
                    return typeof value === 'string' && value !== '';
                },
            },
        });
    };
}
exports.IsNotEmptyString = IsNotEmptyString;
//# sourceMappingURL=is-not-empty-string.js.map