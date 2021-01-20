import { Entity, PrimaryGeneratedColumn, Column, Unique, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import { IsNotEmpty } from 'class-validator'
import { User } from '../interfaces/users.interface'

@Entity()
@Unique(['email'])
export class UserEntity implements User {
  @PrimaryGeneratedColumn()
  userId: number

  @Column()
  @IsNotEmpty()
  email: string

  @Column()
  @IsNotEmpty()
  password: string

  @Column()
  @IsNotEmpty()
  city: string

  @Column()
  @IsNotEmpty()
  gender: string

  @Column()
  @IsNotEmpty()
  phoneNumber: string

  @Column()
  @CreateDateColumn()
  createdAt: Date

  @Column()
  @UpdateDateColumn()
  updatedAt: Date
}