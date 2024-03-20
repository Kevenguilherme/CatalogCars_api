
import supertest from 'supertest'
import { beforeEach } from "vitest";
import { prisma } from "../database/prisma";
import { app } from "../http/app";

export const request = supertest(app);

beforeEach(async () => {
  await prisma.$transaction([
    prisma.car.deleteMany(),
  ]);
});
