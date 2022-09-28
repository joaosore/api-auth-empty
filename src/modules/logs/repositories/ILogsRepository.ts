import { ICreateLogDTO } from '../dtos/ICreateLogsDTO';

interface ILogsRepository {
  create({ el_id, text, user_id }: ICreateLogDTO): Promise<void>;
}

export { ILogsRepository };
