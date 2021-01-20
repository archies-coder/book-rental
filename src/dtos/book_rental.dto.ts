import { IsBoolean, IsDate, IsNumber } from 'class-validator'

export class RentBookDto {
  @IsNumber()
  userId: number

  @IsNumber()
  bookId: number

  @IsNumber()
  quantity: number

  @IsDate()
  renalStartDate: Date

  @IsDate()
  rentalEndDate: Date

  @IsNumber()
  totalAmount: number

  @IsBoolean()
  isReturned: boolean

  @IsDate()
  returnDate?: Date
}
