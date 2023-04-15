import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export interface ICredentials {
  email: string;
  password: string;
}

export class CredentialsDto implements ICredentials {
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({ example: 'first@mail.ru' })
  email: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'test-pass1' })
  password: string;
}
