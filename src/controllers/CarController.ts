import { Request, Response } from 'express';
import { CarsService } from '../services/car.service';

export class CarController {
 private carsService = new CarsService()

 public create = async (req: Request, res: Response): Promise<Response> => {
  const newCar = await this.carsService.createCar(req.body)
    return res.status(201).json(newCar)
}
}