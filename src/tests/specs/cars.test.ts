import { describe, it } from "vitest";
import { car } from '../mocks/car.mocks';
import { request } from "../setupFiles";
import { carsDefaultExpects } from '../utils/carsDefaultExperts';
import { invalidDataCar } from './../mocks/car.mocks';

describe("create car", () => {
  it("should be able to create car sucessfully", async () => {

    const data = await request
      .post('/cars')
      .send(car)
      .expect(201)
      .then((response) => response.body)

    carsDefaultExpects(data);
  });

  it("should throw error when try to create a task with invalid data types", async () => {

    await request
      .post("/cars")
      .send(invalidDataCar)
      .expect(400);
  });
});