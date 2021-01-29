import { IsNumber, IsString } from 'class-validator'

export class CreateBookDto {
  @IsString()
  title: string

  @IsString()
  description: string

  @IsNumber()
  availableQuantity: number

  @IsString()
  author: string

  @IsNumber()
  price: number

  @IsNumber()
  rentPerDay: number
}

export class UpdateBookDto {
  @IsString()
  title?: string

  @IsString()
  description?: string

  @IsNumber()
  availableQuantity?: number

  @IsString()
  author?: string

  @IsNumber()
  price?: number

  @IsNumber()
  rentPerDay?: number
}
