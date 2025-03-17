// import { createParamDecorator, ExecutionContext } from '@nestjs/common';

// export const GetUser = createParamDecorator(
//   (data: string | undefined, ctx: ExecutionContext) => {
//     const request = ctx.switchToHttp().getRequest();
//     if (!request.user) {
//       return null; // Handle cases where user is not set
//     }
//     return data ? request.user[data] : request.user;
//   },
// );

import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const GetUser = createParamDecorator(
  (data, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user; // Ensure user is extracted
  },
);

