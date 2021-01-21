import { Bill } from './../interfaces/bill.interface'
import BillEntity from '../entity/bill.entity'
import { getRepository } from 'typeorm'

export default class BillService {
  public bills = BillEntity

  public async getBillByRentalId(rentalId: number): Promise<Bill> {
    const billRepository = getRepository(this.bills)
    const bill = await billRepository.findOne({ where: { rentalId: rentalId } })
    return bill
  }
}
