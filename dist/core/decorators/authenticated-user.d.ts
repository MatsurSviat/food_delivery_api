import type { User } from '@entities';
export declare const AuthenticatedUser: <T extends Partial<User> = User>(...dataOrPipes: (import("@nestjs/common").PipeTransform<any, any> | (keyof User)[] | import("@nestjs/common").Type<import("@nestjs/common").PipeTransform<any, any>>)[]) => ParameterDecorator;
