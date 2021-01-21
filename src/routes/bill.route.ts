import { Router } from 'express'
import BillController from '../controllers/bill.controller'
import Route from '../interfaces/routes.interface'

export default class BillRoute implements Route {
  public path = '/bill'
  public router = Router()

  private billController: BillController = new BillController()

  private initializeRoutes() {
    this.router.get(this.path + '/:id(d+)', this.billController.getBill)
  }
}
