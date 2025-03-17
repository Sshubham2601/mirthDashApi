
// AuthModule - Manages authentication logic and dependencies
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';

import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { DatabaseModule } from '@app/database';
import { EntietiesModule } from '@app/database/entieties/entieties.module';
import { JwtStrategy } from './Strategy/jwt-strategy';
import { AuthController } from './auth.controllers';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    EntietiesModule, // Import user entity module
    DatabaseModule, // Import database module
    // PassportModule.register({ defaultStrategy: 'jwt' }),
    ConfigModule.forRoot(),
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'default_secret',
      signOptions: { expiresIn: '1h' },
    })

  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService,JwtModule],
})
export class AuthModule {}

