import { Router } from 'express'
import BooksController from '../controllers/books.controller'
import { CreateBookDto } from '../dtos/books.dto'
import Route from '../interfaces/routes.interface'
import validationMiddleware from '../middlewares/validation.middleware'

class BooksRoute implements Route {
  public path = '/books'
  public router = Router()
  public static booksController = new BooksController()

  constructor() {
    this.initializeRoutes()
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, BooksRoute.booksController.getBooks)
    // this.router.get(`${this.path}/:id(\\d+)`, this.booksController.getBookById)
    this.router.post(`${this.path}`, validationMiddleware(CreateBookDto, 'body'), BooksRoute.booksController.createBook)
    this.router.put(`${this.path}/:id(\\d+)`, validationMiddleware(CreateBookDto, 'body', true), BooksRoute.booksController.updatebook)
    // this.router.delete(`${this.path}/:id(\\d+)`, this.booksController.deleteBook)
  }
}

export default BooksRoute
