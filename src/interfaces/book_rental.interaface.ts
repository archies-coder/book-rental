export interface BookRental {
  rentalId: number;
  bookId: number;
  userId: number;
  quantity: number;
  rentalStartDate: Date;
  rentalEndDate: Date;
  totalAmount: number;
  isReturned: boolean;
  returnDate: Date;
}
