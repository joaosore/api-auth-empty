import { container } from 'tsyringe';

import { LogsRepository } from '../../modules/logs/infra/typeorm/repositories/LogsRepository';
import { ILogsRepository } from '../../modules/logs/repositories/ILogsRepository';
import { UsersRepository } from '../../modules/users/infra/typeorm/repositories/UsersRepository';
import { UsersTokensRepository } from '../../modules/users/infra/typeorm/repositories/UsersTokensRepository';
import { IUsersRepository } from '../../modules/users/repositories/IUsersRepository';
import { IUsersTokensRepository } from '../../modules/users/repositories/IUsersTokensRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IUsersTokensRepository>(
  'UsersTokensRepository',
  UsersTokensRepository,
);

container.registerSingleton<ILogsRepository>('LogsRepository', LogsRepository);
