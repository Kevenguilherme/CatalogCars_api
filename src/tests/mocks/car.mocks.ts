import { prisma } from '../../database/prisma';

export const car = {
  name: "Lorem ipsum",
  description: "Lorem ipsum",
  brand: "Lorem ipsum",
  year: 1,
  km: 1,
};

export const secondCarMock = {
 name: "Lorem ipsum",
 description: "Lorem ipsum",
 brand: "Lorem ipsum",
 year: 1,
 km: 1,
}

export const invalidDataCar = {
  name: "Lorem ipsum",
  description: "Lorem ipsum",
  brand: "Lorem ipsum",
  year: "Invalid", 
  km: "Invalid",   
};


export const updatedCarMock = {
 name: "Lorem ipsum",
 description: "Lorem ipsum",
 brand: "Lorem ipsum",
 year: 1,
 km: 1,
};

export const invalidDataUpdateCar = {
 name: 123,
 description: 123,
 brand: 123,
 year: "Lorem ipsum",
 km: "Lorem ipsum",
}


export const getCarsList = async () => {
  const cars = await prisma.car.findMany();

  return [
    {
      id: "string",
      name: "Lorem ipsum",
      description: "Lorem ipsum",
      brand: "Lorem ipsum",
      year: 1,
      km: 1
    },
  ];
};
