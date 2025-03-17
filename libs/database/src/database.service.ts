// import { Injectable } from '@nestjs/common';
// import { Sequelize } from 'sequelize-typescript';

// @Injectable()
// export class DatabaseService {
//   constructor(private sequelize: Sequelize) {}

//   // async testConnection() {
//   //   try {
//   //     await this.sequelize.authenticate();
//   //     console.log('✅ Database connection established successfully');
//   //   } catch (error) {
//   //     console.error('❌ Unable to connect to the database:', error);
//   //   }
//   // }
// }

import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { InjectConnection } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class DatabaseService  {
  // private readonly logger = new Logger(DatabaseService.name);

  // constructor(@InjectConnection() private readonly sequelize: Sequelize) {}

  // async onModuleInit() {
  //   await this.verifyConnection();
  // }

  // async verifyConnection() {
  //   try {
  //     await this.sequelize.authenticate();
  //     this.logger.log('Database connection has been established successfully.');
  //   } catch (error) {
  //     this.logger.error('Unable to connect to the database:', error);
  //   }
  // }
}
