import { beforeEach } from 'node:test';
import { describe, expect, it } from "vitest";
import { prisma } from '../../database/prisma';
import { request } from "../setupFiles";
import { car } from './../mocks/car.mocks';

 describe("delete car", () => {
 let carId: string;

 beforeEach(async () => {
  const newCar = await prisma.car.create({ data: car });
    carId = newCar.id;
  })

  it("should be able to delete a car successfully", async () => {
 
   const response = await request
    .delete(`/cars/${carId}`)
    .expect(204);

    const deletedCar = await prisma.car.findFirst({ where: { id: carId } });
    expect(deletedCar).toBeNull();
  });
});
