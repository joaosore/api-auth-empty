import { IUserDTO } from '../../dtos/IUserDTO';

interface IUserRepository {
  create({ name, email }: IUserDTO): Promise<void>;
}

export { IUserRepository };
