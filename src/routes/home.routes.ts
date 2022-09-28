import { Request, Response, Router } from 'express';

import * as pack from '../../package.json';

const homeRoutes = Router();

homeRoutes.get('/', (request: Request, response: Response): Response => {
  return response.json({ message: `${pack.name.toUpperCase()}  v0.0.0` });
});

export { homeRoutes };
