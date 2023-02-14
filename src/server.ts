import 'reflect-metadata';
import 'module-alias/register';

import { connectDatabase } from './database';
import express from 'express';

import { router } from './routes';

const app = express();
const port = 3001;

import './containers';

import bodyParser from 'body-parser';

app.use(express.json());

app.use(router);

connectDatabase();

app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
