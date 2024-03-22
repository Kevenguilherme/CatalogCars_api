import { Router } from 'express'
import { CarController } from '../controllers/CarController'
import { ensure } from '../middlewares/ensure.middleware'
import { carCreateSchema, carUpdateSchema } from '../schemas/car.schema'

export const carsRouter = Router()

const carController = new CarController()

carsRouter.post('/', 
 ensure.validateBody(carCreateSchema),
 carController.create )

 carsRouter.get('/', carController.read)

 carsRouter.get('/:carsId',
 ensure.paramsCarIdExists,
  carController.retrieve)

  carsRouter.patch('/:carsId',
  ensure.validateBody(carUpdateSchema),
  carController.update)

  carsRouter.delete('/:carsId', carController.detele)