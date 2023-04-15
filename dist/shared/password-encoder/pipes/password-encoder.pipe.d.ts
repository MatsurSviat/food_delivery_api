import { PipeTransform } from '@nestjs/common';
import type { User } from '@entities';
import { PasswordEncoderService } from '../services/password-encoder.service';
export declare class EncodePasswordPipe<TUser extends User> implements PipeTransform<TUser, Promise<TUser>> {
    private readonly _passwordEncoderService;
    constructor(_passwordEncoderService: PasswordEncoderService);
    transform(user: TUser): Promise<TUser>;
}
