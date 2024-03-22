import { Request, Response } from 'express';
import { CarsService } from '../services/car.service';

export class CarController {
 private carsService = new CarsService()

 public create = async (req: Request, res: Response): Promise<Response> => {
  const newCar = await this.carsService.createCar(req.body)
    return res.status(201).json(newCar)
}

 public read = async (
  req: Request,
  res: Response ): Promise<Response> => {
  
  const allTasks = await this.carsService.read()
   return res.status(200).json(allTasks)
 }

 public retrieve = async (req: Request, res: Response): Promise<Response> => {
  const { foundCar } = res.locals
  const car = await this.carsService.retrieve(foundCar)
  
    return res.status(200).json(car)
 }

 public update = async (req: Request, res: Response): Promise<Response> => {
  const carsId = req.params.carsId
  const carUpdate = await this.carsService.update(carsId, req.body)
  
  return res.status(200).json(carUpdate)
}

public detele = async (
 { params: { carsId } }: Request, 
  res: Response,): Promise<Response> => {
   await this.carsService.delete(carsId)
    return res.status(204).json()
 }

}