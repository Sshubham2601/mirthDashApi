import { ApiModule } from '@app/api';
import { Module } from '@nestjs/common';
import { ChannelController } from './channel.controller';
import { ChannelService } from './channel.service';
import { EntietiesModule } from '@app/database/entieties/entieties.module';
import { DatabaseModule } from '@app/database';
import { AuthModule } from 'src/auth/auth.module';

@Module({
    imports:[ApiModule,// Use the globally available API module
         EntietiesModule,
         DatabaseModule,    
         AuthModule
    ],
    controllers:[ChannelController],
    providers:[ChannelService],
    exports:[ChannelService]
})
export class ChannelModule {}
