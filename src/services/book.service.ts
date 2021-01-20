import { isEmpty } from 'class-validator'
import { getRepository, Repository } from 'typeorm'
import { CreateBookDto } from '../dtos/books.dto'
import { BookEntity } from '../entity/book.entity'
import HttpException from '../exceptions/HttpException'
import { Book } from '../interfaces/book.interface'

export default class BookService {
  public books = BookEntity

  public async findAllBooks(): Promise<Book[]> {
    const books: Book[] = await getRepository(this.books).find()
    return books
  }

  public async findBookById(id: string): Promise<Book> {
    const book: Book = await getRepository(this.books).findOne(id)
    return book
  }

  public async createBook(bookData: CreateBookDto): Promise<Book> {
    if (isEmpty(bookData)) throw new HttpException(400, "You're not bookData")

    const book = getRepository(this.books).save(bookData)
    return book
  }

  public async updateBook(bookId: number, bookData: CreateBookDto): Promise<Book> {
    if (isEmpty(bookData)) throw new HttpException(400, "You're not bookData")

    await getRepository(this.books).update(bookId, bookData)
    const updatedBook = getRepository(this.books).findOne(bookId)
    return updatedBook
  }

  public async deleteBook(bookId: string): Promise<void> {
    await getRepository(this.books).delete(bookId)
  }
}
