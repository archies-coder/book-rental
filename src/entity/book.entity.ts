import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Book } from '../interfaces/book.interface'

@Entity({ name: 'BOOK' })
export class BookEntity implements Book {
  @PrimaryGeneratedColumn({ name: 'BOOK_ID' })
  bookId: number

  @Column({ name: 'TITLE' })
  title: string

  @Column({ name: 'DESCRIPTION' })
  description: string

  @Column({ name: 'AVAILABLE_QUANTITY' })
  availableQuantity: number

  @Column({ name: 'AUTHOR' })
  author: string

  @Column({ name: 'PRICE' })
  price: number

  @Column({ name: 'RENT_PER_DAY' })
  rentPerDay: number

  @Column()
  @CreateDateColumn()
  createdAt: Date

  @Column()
  @UpdateDateColumn()
  updatedAt: Date
}
