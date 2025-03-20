import { Module, Global } from '@nestjs/common';
import { ApiService } from './api.service';
import { ConfigModule } from '@nestjs/config';

@Global() //  Makes the module globally available
@Module({
  imports:[ConfigModule],
  providers: [ApiService],
  exports: [ApiService], //  Exporting so it can be used anywhere
})
export class ApiModule {}
