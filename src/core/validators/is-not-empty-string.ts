import { registerDecorator, type ValidationOptions } from 'class-validator';

export function IsNotEmptyString(validationOptions: ValidationOptions = {}): PropertyDecorator {
  return function (object: object, propertyName: string): void {
    registerDecorator({
      name: 'IsNotEmptyString',
      target: object.constructor,
      propertyName,
      options: {
        ...validationOptions,
        message: 'Value must be a string and this string cannot be empty',
      },
      validator: {
        validate: (value: unknown): boolean => {
          return typeof value === 'string' && value !== '';
        },
      },
    });
  };
}
