import { Module } from '@nestjs/common';

import { ChannelModule } from './channel/channel.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from '@app/database';

@Module({
  imports: [DatabaseModule,ConfigModule.forRoot({ isGlobal: true }),ChannelModule, AuthModule],
  // providers: [AppService],
  

})
export class AppModule {}
