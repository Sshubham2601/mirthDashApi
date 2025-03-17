import { Controller, Post, Body, Get, BadRequestException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('Token')  // Ensure it's a POST method
  async login(@Body() body: { empCode?: string }) {
    if(!body?.empCode || !body.empCode.trim()){
      throw new BadRequestException('Invalid employee code'); 
    }
    return this.authService.generateToken(body.empCode);
  }
}
