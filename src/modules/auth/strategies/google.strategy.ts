import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, VerifyCallback } from "passport-google-oauth2";

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, "google") {
  constructor() {
    super({
      clientID:
        "139880381289-b3podjp8o5vqc05e54ekqthjs6mpdkui.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "http://localhost:4000/api/auth/google/callback",
      scope: ["email", "profile"],
    });
  }

  async validate(
    _accessToken: string,
    _refreshToken: string,
    profile: any,
    done: VerifyCallback
  ): Promise<any> {
    const { name, emails, photos } = profile;

    const user = {
      email: emails[0].value,
      userName: `${name.givenName} ${name.familyName}`,
      photo: photos[0].value,
    };

    done(null, user);
  }
}
