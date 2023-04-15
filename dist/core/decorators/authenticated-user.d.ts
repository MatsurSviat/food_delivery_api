import type { User } from '@entities';
export declare const AuthenticatedUser: <T extends Partial<User> = User>(...dataOrPipes: ((keyof User)[] | import("@nestjs/common").PipeTransform<any, any> | import("@nestjs/common").Type<import("@nestjs/common").PipeTransform<any, any>>)[]) => ParameterDecorator;
