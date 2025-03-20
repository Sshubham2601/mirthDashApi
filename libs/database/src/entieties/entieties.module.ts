import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.entity';

@Module({
    imports:[SequelizeModule.forFeature([User],"Master")], //register user entity
    exports: [SequelizeModule], //Export so other modules can use it
})
export class EntietiesModule {}
