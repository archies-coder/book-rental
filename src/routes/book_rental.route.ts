import BookRentalController from '../controllers/book_rental.controller'
import { Router } from 'express'
import Route from '../interfaces/routes.interface'

export default class BookRentalRoute implements Route {
  public path = '/book-rental'
  public router = Router()
  public bookRentalController = new BookRentalController()

  constructor() {
    this.initializeRoutes()
  }
  private initializeRoutes() {
    this.router.post(this.path, this.bookRentalController.rentBook)
    this.router.get(this.path + '/returns/:id(\\d+)', this.bookRentalController.returnBook)
  }
}
