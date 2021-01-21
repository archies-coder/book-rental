import { IsBoolean, IsDate, IsNumber, IsString } from 'class-validator'

export class RentBookDto {
  @IsNumber()
  userId: number

  @IsNumber()
  bookId: number

  @IsNumber()
  quantity: number

  @IsString()
  rentalStartDate: string

  @IsString()
  rentalEndDate: string

  @IsNumber()
  totalAmount: number

  @IsBoolean()
  isReturned: boolean

  @IsString()
  returnDate?: string
}
