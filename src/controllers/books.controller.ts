import { NextFunction, Request, Response } from 'express'
import { Book } from '../interfaces/book.interface'
import BookService from '../services/book.service'
import { CreateBookDto, UpdateBookDto } from './../dtos/books.dto'

export default class BooksController {
  private bookService = new BookService()

  public getBooks = async (req: Request, res: Response, next: NextFunction): Promise<void | Response> => {
    try {
      const findAllBooksData: Book[] = await this.bookService.findAllBooks()

      if (findAllBooksData.length === 0) {
        return res.send(404).json({ message: 'No books' })
      }

      const pageCount = Math.ceil(findAllBooksData.length / 10)
      let page = parseInt(req.query.p as string)
      if (!page) {
        page = 1
      }
      if (page > pageCount) {
        page = pageCount
      }

      return res.status(200).json({
        data: {
          page: page,
          pageCount: pageCount,
          books: findAllBooksData.slice(page * 10 - 10, page * 10),
        },
        message: 'findAll',
      })
    } catch (error) {
      next(error)
    }
  }

  public createBook = async (req: Request, res: Response): Promise<void> => {
    try {
      const bookData: CreateBookDto = req.body
      const newBook = await this.bookService.createBook(bookData)

      res.status(201).json({ data: newBook, message: 'created' })
    } catch (error) {}
  }

  public updatebook = async (req: Request, res: Response): Promise<void | Response> => {
    try {
      const bookData: UpdateBookDto = req.body
      const bookId = req.params.id

      const updatedBook = await this.bookService.updateBook(parseInt(bookId), bookData)

      res.status(201).json({ data: updatedBook, message: 'Updated' })
    } catch (error) {
      throw new Error(error)
    }
  }

  public deleteBook = async (req: Request, res: Response): Promise<void> => {
    try {
      const bookId = req.params.id
      await this.bookService.deleteBook(bookId)
      res.status(200).json({ message: 'Deleted' })
    } catch (error) {}
  }
}
