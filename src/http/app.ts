
import express, { json } from "express";
import 'express-async-errors';
import helmet from 'helmet';
import { handleError } from '../middlewares/handleErrors.middleware';
import { carsRouter } from '../routers/CarsRouter';


export const app = express();

app.use(helmet())
app.use(json());

app.use('/cars', carsRouter)


app.use(handleError)
