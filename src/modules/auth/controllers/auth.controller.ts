import { Body, Controller, Post, UseGuards, UsePipes } from "@nestjs/common";
import { ApiBody, ApiCreatedResponse, ApiTags } from "@nestjs/swagger";

import { AuthenticatedUser, Public } from "@core/decorators";
import { User } from "@entities";
import { EncodePasswordPipe } from "@shared/password-encoder";

import { LocalAuthGuard } from "../guards";
import { CredentialsDto, RegisterDto } from "../models";
import { AuthService } from "../services";

@ApiTags("Auth")
@Controller("auth")
export class AuthController {
  constructor(private readonly _authService: AuthService) {}

  @ApiBody({ type: CredentialsDto })
  @Public()
  @UseGuards(LocalAuthGuard)
  @Post("sign-in")
  async signIn(@AuthenticatedUser() user: User): Promise<string> {
    return this._authService.signIn(user);
  }

  @ApiCreatedResponse({ description: "User registered" })
  @Public()
  @UsePipes(EncodePasswordPipe)
  @Post("sign-out")
  async signOut(@Body() body: RegisterDto): Promise<void> {
    return this._authService.signOut(body);
  }

  @ApiCreatedResponse({ description: "User registered" })
  @Public()
  @UsePipes(EncodePasswordPipe)
  @Post("sign-up")
  async signUp(@Body() body: RegisterDto): Promise<void> {
    return this._authService.signUp(body);
  }
}
