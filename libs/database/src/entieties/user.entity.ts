import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'users', timestamps: false })
export class User extends Model {
  @Column({ field: 'empCode', type: DataType.STRING, primaryKey: true })
  declare empCode: string; //  Use `declare` to avoid shadowing

  // @Column({ type: DataType.STRING })
  // name: string;

  // @Column({ type: DataType.STRING })
  // role: string;
}
