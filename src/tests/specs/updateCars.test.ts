import { beforeEach, describe, expect, it } from 'vitest';
import { prisma } from '../../database/prisma';
import { car, updatedCarMock } from '../mocks/car.mocks';
import { request } from '../setupFiles';

describe("update cars", () => {
 let carsId: string

 beforeEach(async () => {
 const newCar = await prisma.car.create({ data: car })
  carsId = newCar.id
 }) 

 it("should be able to update a car successfully", async () => {
  const updatedCarData = updatedCarMock

  const response = await request
    .patch(`/cars/${carsId}`)
    .send(updatedCarData)
    
    expect(response.statusCode).toBe(200)
    expect(response.body.name).toEqual(updatedCarData.name)
    expect(response.body.description).toEqual(updatedCarData.description)
    expect(response.body.brand).toEqual(updatedCarData.brand)
    expect(response.body.year).toEqual(updatedCarData.year)
    expect(response.body.km).toEqual(updatedCarData.km)

 });

})