import { isEmpty } from 'class-validator'
import { getRepository, Repository, UpdateResult } from 'typeorm'
import { RentBookDto } from '../dtos/book_rental.dto'
import BookRentalEntity from '../entity/book_rental.entity'
import HttpException from '../exceptions/HttpException'

export default class BookRentalService {
  public bookRental = BookRentalEntity

  private async getBookRentalRepository(): Promise<Repository<BookRentalEntity>> {
    return await getRepository(this.bookRental)
  }

  public async rentBook(bookRentalData: RentBookDto): Promise<BookRentalEntity> {
    if (isEmpty(bookRentalData)) throw new HttpException(400, "You're not bookRentalData")
    const bookRentalRepo: Repository<BookRentalEntity> = await this.getBookRentalRepository()

    const newRental = bookRentalRepo.save(bookRentalData)

    return newRental
  }

  public async returnBook(rentalId: number): Promise<UpdateResult> {
    const bookRentalRepo: Repository<BookRentalEntity> = await this.getBookRentalRepository()

    const rental = bookRentalRepo.update(rentalId, { returnDate: Date.now(), isReturned: true })
    return rental
  }
}
