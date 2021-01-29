export interface BookRental {
  rentalId: number
  bookId: number
  userId: number
  quantity: number
  rentalStartDate: Date
  rentalEndDate: Date
  isReturned: boolean
  returnDate: Date
}
