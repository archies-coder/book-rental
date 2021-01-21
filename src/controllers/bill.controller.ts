import { Request, Response } from 'express'
import billService from '../services/bill.service'
import BillService from '../services/bill.service'

export default class BillController {
  private billService: BillService = new BillService()

  public getBill = async (req: Request, res: Response) => {
    const rentalId = req.params.id

    const bill = this.billService.getBillByRentalId(parseInt(rentalId))
  }
}
