import { Router } from 'express';

import { CreateUserController } from '../modules/users/useCases/createUser/CreateUserController';
import { ListOneUsersController } from '../modules/users/useCases/listOneUsers/ListOneUsersController';
import { ListUsersController } from '../modules/users/useCases/listUsers/ListUsersController';
import { UpdateUserController } from '../modules/users/useCases/updateUser/UpdateUserController';
import { ensureAuthenticated } from '../shared/middleswares/ensureAuthenticated';

const usersRoutes = Router();

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();
const updateUserController = new UpdateUserController();
const listOneUsersController = new ListOneUsersController();

usersRoutes.use(ensureAuthenticated);
usersRoutes.post('/', createUserController.handle);
usersRoutes.get('/', listUsersController.handle);
usersRoutes.get('/:id', listOneUsersController.handle);
usersRoutes.put('/:id', updateUserController.handle);

export { usersRoutes };
