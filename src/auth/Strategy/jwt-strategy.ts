



import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private configService: ConfigService) {
    const secret = configService.get<string>('JWT_SECRET'); // Load secret key

    // console.log('JWT_SECRET from ConfigService:', secret); // Debugging Line

    if (!secret) {
      throw new Error(' JWT_SECRET is missing! Make sure it is set in your environment variables.');
    }

    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: secret, // Use secret key properly
    });
  }

  async validate(payload: { empCode: string }) {
    // console.log('Decoded JWT Payload:', payload); // Debugging Line
    if (!payload.empCode) {
      throw new UnauthorizedException(' Invalid token payload - empCode missing!');
    }
    return { empCode: payload.empCode };
  }
}
