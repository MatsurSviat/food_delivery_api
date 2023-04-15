import { SetMetadata } from '@nestjs/common';

import { IS_PUBLIC } from '@models/constants';

export const Public = (): MethodDecorator => SetMetadata(IS_PUBLIC, true);
