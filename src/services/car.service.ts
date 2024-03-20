import { prisma } from '../database/prisma'
import { createCar, returnCar } from '../interfaces/car.interface'
import { carReturnSchema } from '../schemas/car.schema'

export class CarsService {
 public createCar = async (payload: createCar ): Promise<returnCar> => {

  const newCar = await prisma.car.create({ data: payload }) 
    return carReturnSchema.parse(newCar)
  }
}