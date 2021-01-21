import { Entity, PrimaryGeneratedColumn, Column, Unique, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import { IsNotEmpty } from 'class-validator'
import { User } from '../interfaces/users.interface'

@Entity({ name: 'USER_DETAILS' })
@Unique(['email'])
export class UserEntity implements User {
  @PrimaryGeneratedColumn({ name: 'USER_ID' })
  userId: number

  @Column({ name: 'EMAIL' })
  @IsNotEmpty()
  email: string

  @Column({ name: 'PASSWORD' })
  @IsNotEmpty()
  password: string

  @Column({ name: 'CITY' })
  @IsNotEmpty()
  city: string

  @Column({ name: 'GENDER' })
  @IsNotEmpty()
  gender: string

  @Column({ name: 'PHONE_NUMBER' })
  @IsNotEmpty()
  phoneNumber: string

  @Column()
  @CreateDateColumn()
  createdAt: Date

  @Column()
  @UpdateDateColumn()
  updatedAt: Date
}
