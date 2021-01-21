import { IsNotEmpty } from 'class-validator'
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Bill } from '../interfaces/bill.interface'
import BookRentalEntity from './book_rental.entity'

@Entity({ name: 'BILL' })
export default class BillEntity implements Bill {
  @PrimaryGeneratedColumn({ name: 'BILL_ID' })
  billId: number

  @Column({ name: 'RENTAL_ID' })
  @IsNotEmpty()
  @OneToOne(() => BookRentalEntity, bookRental => bookRental.rentalId)
  @JoinColumn()
  rentalId: number

  @Column({ name: 'AMOUNT' })
  @IsNotEmpty()
  amount: number

  @Column({ name: 'IS_PAID' })
  @IsNotEmpty()
  isPaid: boolean

  @Column({ name: 'PAYMENT_DATE' })
  @IsNotEmpty()
  paymentDate: Date

  @Column()
  @CreateDateColumn()
  createdAt: Date

  @Column()
  @UpdateDateColumn()
  updatedAt: Date
}
