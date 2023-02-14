import { container } from 'tsyringe';

import { IUserRepository } from '@modules/home/repositories/User/IUserRepository';
import { UsersRepository } from '@modules/home/repositories/User/UserRepository';

container.registerSingleton<IUserRepository>(
  'UsersRepository',
  UsersRepository,
);
