import { Request, Response, Router } from 'express';
import { CreateUserController } from '../useCases/create/CreateUserController';

const homeRoutes = Router();

const createUserController = new CreateUserController();

homeRoutes.get('/', (request: Request, response: Response): Response => {
  return response.json({ message: `v0.0.0` });
});

/**
 * @swagger
 * /a:
 *      post:
 *          summary: Send the text to the server
 *          tags:
 *              - Home
 *          description: Send a message to the server and get a response added to the original text.
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              responseText:
 *                                  type: string
 *                                  example: This is some example string! This is an endpoint
 *          responses:
 *              201:
 *                  description: Success
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  text:
 *                                      type: string
 *                                      example: This is some example string!
 *              404:
 *                  description: Not found
 *              500:
 *                  description: Internal server error
 */
homeRoutes.post('/', createUserController.handle);

export { homeRoutes };
