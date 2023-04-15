import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export interface IRegister {
  userName: string;
  email: string;
  password: string;
}

export class RegisterDto implements IRegister {
  @IsNotEmpty()
  @IsString()
  userName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
