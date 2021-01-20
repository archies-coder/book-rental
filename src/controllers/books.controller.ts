import { NextFunction, Request, Response } from 'express'
import { Book } from '../interfaces/book.interface'
import BookService from '../services/book.service'
import { CreateBookDto } from './../dtos/books.dto'

export default class BooksController {
  private bookService = new BookService()

  public getBooks = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllBooksData: Book[] = await this.bookService.findAllBooks()

      res.status(200).json({ data: findAllBooksData, message: 'findAll' })
    } catch (error) {
      next(error)
    }
  }

  public createBook = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const bookData: CreateBookDto = req.body
      const newBook = await this.bookService.createBook(bookData)

      res.status(201).json({ data: newBook, message: 'created' })
    } catch (error) {}
  }

  public updatebook = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { bookId, ...bookData } = req.body
      const updatedBook = await this.bookService.updateBook(bookId, bookData)

      res.status(201).json({ data: updatedBook, message: 'Updated' })
    } catch (error) {}
  }

  public deleteBook = async (req: Request, res: Response): Promise<void> => {
    try {
      const bookId = req.params.id
      await this.bookService.deleteBook(bookId)
      res.status(200).json({ message: 'Deleted' })
    } catch (error) {}
  }
}
