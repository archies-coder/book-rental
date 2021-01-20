import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Book } from '../interfaces/book.interface'

@Entity()
export class BookEntity implements Book {
  @PrimaryGeneratedColumn()
  bookId: number

  @Column()
  title: string

  @Column()
  description: string

  @Column()
  availableQuantity: number

  @Column()
  author: string

  @Column()
  price: number

  @Column()
  rentPerDay: number

  @Column()
  @CreateDateColumn()
  createdAt: Date

  @Column()
  @UpdateDateColumn()
  updatedAt: Date
}
