import { expect } from "vitest";

export interface ICar {
 id: string,
 name: "Lorem ipsum",
 description: "Lorem ipsum",
 brand: "Lorem ipsum",
 year: number,
 km: number,
}

export const carsDefaultExpects = (car: ICar) => {
  expect(car).toBeDefined();
  expect(car).toBeTypeOf("object");
  expect(car).toEqual;

  expect(car.name).toBeDefined();
  expect(car.name).toBeTypeOf("string");

  expect(car.brand).toBeDefined();
  expect(car.brand).toBeTypeOf("string");

  expect(car.description).toBeDefined();
  expect(car.description).toBeTypeOf("string");

  expect(car.year).toBeDefined();
  expect(car.year).toBeTypeOf('number');

  expect(car.km).toBeDefined();
  expect(car.km).toBeTypeOf('number');
};