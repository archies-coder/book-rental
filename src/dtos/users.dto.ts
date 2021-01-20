import { IsEmail, IsString } from 'class-validator'

export class CreateUserDto {
  @IsEmail()
  public email: string

  @IsString()
  public password: string

  @IsString()
  public city: string

  @IsString()
  public gender: string

  @IsString()
  public phoneNumber: string
}
