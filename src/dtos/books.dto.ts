import { IsNumber, IsString } from 'class-validator'

export class CreateBookDto {
  @IsString()
  title: string

  @IsString()
  description: string

  @IsNumber()
  availilableQuantity: number

  @IsString()
  author: string

  @IsNumber()
  price: number

  @IsNumber()
  rentPerDay: number
}
