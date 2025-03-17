  import { Module } from '@nestjs/common';
  import { SequelizeModule } from '@nestjs/sequelize';
  import { DatabaseService } from './database.service';
  import { ClientConfig } from './clientConfig/client_config';
import { EntietiesModule } from './entieties/entieties.module';


  @Module({
    imports: [
      EntietiesModule,
      // Dynamic Mapping for MySQL
      SequelizeModule.forRoot({
        dialect: 'mysql',
        ...ClientConfig.Base, // Access from JSON key
        autoLoadModels: true,
        synchronize: true,
        replication: {
          write: ClientConfig.Base,
          read: ClientConfig.Base
        }
      }),

      // Another Database Configurations
      SequelizeModule.forRoot({
        dialect: 'mysql',
        ...ClientConfig.Master,
        autoLoadModels: true,
        synchronize: false
      }),
    
    ],
    providers: [DatabaseService],
    exports: [DatabaseService,EntietiesModule],
  })
export class DatabaseModule {}




