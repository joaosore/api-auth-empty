import { Router } from 'express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.1',
    info: {
      title: 'REST API - Portal IEMA',
      version: '1.0.0',
    },
    schemes: ['http', 'https'],
    servers: [{ url: 'http://localhost:3000/' }],
  },
  apis: [
    `${__dirname}/../routes/index.ts`,
    `${__dirname}/../modules/**/route/index.ts`,
  ],
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerRoutes = Router();

swaggerRoutes.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export { swaggerRoutes };
