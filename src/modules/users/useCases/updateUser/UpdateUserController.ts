import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateUserUseCase } from './UpdateUserUseCase';

class UpdateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, password, sector_id } = request.body;
    const { id } = request.params;

    const updateUserUseCase = container.resolve(UpdateUserUseCase);

    await updateUserUseCase.execute({ id, name, password, sector_id });

    return response.status(201).send();
  }
}

export { UpdateUserController };
