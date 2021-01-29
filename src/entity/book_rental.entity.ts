import { UserEntity } from './users.entity'
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { BookRental } from '../interfaces/book_rental.interaface'
import { IsNotEmpty } from 'class-validator'
import { BookEntity } from './book.entity'

@Entity({ name: 'BOOK_RENTAL' })
export default class BookRentalEntity implements BookRental {
  @PrimaryGeneratedColumn({
    name: 'RENTAL_ID',
  })
  rentalId: number

  @Column({
    name: 'IS_RETURNED',
  })
  isReturned: boolean

  @Column({
    name: 'QUANTITY',
  })
  @IsNotEmpty()
  quantity: number

  @Column({
    name: 'RENTAL_END_DATE',
  })
  @IsNotEmpty()
  rentalEndDate: Date

  @Column({
    name: 'BOOK_ID',
  })
  @IsNotEmpty()
  @ManyToOne(() => BookEntity, book => book.bookId)
  bookId: number

  @Column({
    name: 'RENTAL_START_DATE',
  })
  @IsNotEmpty()
  rentalStartDate: Date

  @Column({
    name: 'RETURN_DATE',
    nullable: true,
  })
  @IsNotEmpty()
  returnDate: Date

  @Column({
    name: 'USER_ID',
  })
  @IsNotEmpty()
  @ManyToOne(() => UserEntity, user => user.userId)
  userId: number

  @Column()
  @CreateDateColumn()
  createdAt: Date

  @Column()
  @UpdateDateColumn()
  updatedAt: Date
}
