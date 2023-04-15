import { AppConfigService } from '@shared/config';
export declare class PasswordEncoderService {
    private readonly _configService;
    constructor(_configService: AppConfigService);
    encode(password: string): Promise<string>;
    compare(plainTextPassword: string, hashedPassword: string): Promise<boolean>;
}
