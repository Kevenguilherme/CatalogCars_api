import { beforeEach, describe, it } from "vitest";
import { prisma } from '../../database/prisma';
import { request } from "../setupFiles";
import { car } from './../mocks/car.mocks';

 describe("get cars", () => {
  let carsId: string

 beforeEach(async () => {
  const newCar = await prisma.car.create({ data: car })
  carsId = newCar.id
  })

 it("should be able to get all cars correctly", async () => {
   const data = await request
   .get(`/cars/`)
   .expect(200)
   .then((response) => response.body);
 })

  it("should be able to get a car by ID", async () => {
    const response = await request
     .get(`/cars/${carsId}`)
     .expect(200); 
  })

  it("should return an error when the ID is incorrect", async () => {
    const incorrectId = "invalid_id"
    const response = await request
      .get(`/cars/${incorrectId}`)
      .expect(404)
  })
})


