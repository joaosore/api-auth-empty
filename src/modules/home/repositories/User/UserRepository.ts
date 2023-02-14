import mongoose from 'mongoose';
import { User } from '../../entities/User';
import { IUserRepository } from './IUserRepository';

class UsersRepository implements IUserRepository {
  private repository;

  constructor() {
    this.repository = mongoose.model('User', User);
  }

  async create(): Promise<void> {
    await this.repository.create({
      name: 'John Smith',
      email: 'john.smith@gmail.com',
    });
  }
}

export { UsersRepository };
