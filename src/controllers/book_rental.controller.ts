import { Request, Response } from 'express'
import BookRentalService from '../services/book_rental.service'
import { RentBookDto } from '../dtos/book_rental.dto'

export default class BookRentalController {
  private bookRental = new BookRentalService()

  public rentBook = async (req: Request, res: Response): Promise<void> => {
    const body: RentBookDto = req.body

    const rentedBook = await this.bookRental.rentBook(body)

    res.status(201).json({ data: rentedBook, message: 'Rented Book' })
  }

  public returnBook = async (req: Request, res: Response): Promise<void> => {
    const rental_id: number = parseInt(req.params.id)

    await this.bookRental.returnBook(rental_id)

    res.status(201).json({ message: 'Book Returned' })
  }
}
