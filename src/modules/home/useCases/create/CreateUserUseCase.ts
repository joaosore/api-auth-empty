import { inject, injectable } from 'tsyringe';

import { IUserDTO } from '../../dtos/IUserDTO';
import { IUserRepository } from '../../repositories/User/IUserRepository';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUserRepository,
  ) {}

  async execute({ name, email }: IUserDTO): Promise<void> {
    await this.usersRepository.create({
      name,
      email,
    });
  }
}

export { CreateUserUseCase };
