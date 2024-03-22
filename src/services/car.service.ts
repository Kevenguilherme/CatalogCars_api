import { Car } from '@prisma/client'
import { prisma } from '../database/prisma'
import { CreateCar, ReturnCar, UpdateCar } from '../interfaces/car.interface'
import { carReturnSchema } from '../schemas/car.schema'

export class CarsService {
 public createCar = async (payload: CreateCar ): Promise<ReturnCar> => {

  const newCar = await prisma.car.create({ data: payload }) 
    return carReturnSchema.parse(newCar)
  }

  public read = async (): Promise<Array<Car>> => { 
    return await prisma.car.findMany() }

  public retrieve = async (foundCar: Car): Promise<ReturnCar> => {
   return carReturnSchema.parse(foundCar)
  }

  public update = async (carsId: string, payload: UpdateCar): Promise<Car | null> => {
    return await prisma.car.update({ data: payload, where: { id: carsId } })
   }

   public delete = async (carsId: string): Promise<void> => {
    await prisma.car.delete({ where: { id: carsId } }) 
  }
   
}