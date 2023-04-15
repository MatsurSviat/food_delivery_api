import { Environment } from '@models/enums';
export declare class EnvironmentVariables {
    NODE_ENV: Environment;
    PORT: number;
    APP_CLIENT_URL: string;
    DB_HOST: string;
    DB_PORT: number;
    DB_USER: string;
    DB_PASSWORD: string;
    DB_NAME: string;
    JWT_EXPIRES_IN: string;
    JWT_SECRET: string;
    ENCODER_SALT_ROUND: number;
    SG_TITLE: string;
    SG_PATH: string;
    SG_DESCRIPTION: string;
}
