import express, { Request, Response, NextFunction } from 'express';

import 'reflect-metadata';
import 'express-async-errors';

import swaggerUi from 'swagger-ui-express';

import './shared/container';
import './shared/container/providers';

import createConnection from './database';
import { router } from './routes';
import swaggerFile from './sagger.json';
import { AppError } from './shared/erros/AppError';

createConnection();

const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: 'error',
      message: `Internal server error - ${err.message}`,
    });
  },
);

app.listen(3001);
