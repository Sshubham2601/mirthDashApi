

// AuthService - Handles authentication logic
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '@app/database/entieties/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @InjectModel(User,'Master') 
    private readonly userModel: typeof User,
  ) {}
   
  async generateToken(empCode: string) {
    
    // console.log('Received empCode:', empCode); //  Debugging input
    const user = await this.userModel.findOne({ where: { empCode } });
    if (!user) {
      throw new UnauthorizedException('Invalid employee code');
    }
    const payload = { empCode: user.empCode };
    // console.log('JWT Payload:', payload); //  Debugging payload
    const token=this.jwtService.sign(payload);

    // console.log('Generated Token:', token); // Debugging token output
    return { access_token:token };


  }
}

