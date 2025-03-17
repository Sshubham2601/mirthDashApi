
import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { ChannelService } from './channel.service';
import { JwtAuthGuard } from 'src/auth/Guards/jwt-auth.guard';
import { User } from '@app/database/entieties/user.entity';
import { GetUser } from 'src/auth/decorector/get-uesr.decoretor';


@UseGuards(JwtAuthGuard)
@Controller('channel')
export class ChannelController {
  constructor(private readonly channelService: ChannelService) {}

  @Get('deploydata')
  async fetchChannelStatuses(@Request() req, @GetUser() user: User) {  
    console.log('Authenticated User:', user); // Debugging
    const authHeader = req.headers.authorization; // Extract token from request

    return this.channelService.getChannelStatuses(authHeader); // Pass token
  }
}
