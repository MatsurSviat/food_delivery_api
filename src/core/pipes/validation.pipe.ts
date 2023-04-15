import { ValidationPipe } from '@nestjs/common';

export class AppValidationPipe extends ValidationPipe {
  constructor() {
    super({
      validationError: { value: false, target: false },
      whitelist: true,
      forbidNonWhitelisted: true,
    });
  }
}
