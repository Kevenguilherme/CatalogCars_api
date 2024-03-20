import { Router } from 'express'
import { CarController } from '../controllers/CarController'
import { ensure } from '../middlewares/ensure.middleware'
import { carCreateSchema } from '../schemas/car.schema'

export const carsRouter = Router()

const carController = new CarController()

carsRouter.post('/', 
 ensure.validateBody(carCreateSchema),
 carController.create )