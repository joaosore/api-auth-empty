import { Schema } from 'mongoose';
import { IUserDTO } from '../dtos/IUserDTO';

const User = new Schema<IUserDTO>({
  name: { type: String, required: true },
  email: { type: String, required: true },
});

export { User };
