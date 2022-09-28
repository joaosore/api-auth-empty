import { getRepository, Repository } from 'typeorm';

import { ICreateLogDTO } from '../../../dtos/ICreateLogsDTO';
import { ILogsRepository } from '../../../repositories/ILogsRepository';
import { Log } from '../entities/Log';

class LogsRepository implements ILogsRepository {
  private repository: Repository<Log>;

  constructor() {
    this.repository = getRepository(Log);
  }

  async create({ el_id, text, user_id }: ICreateLogDTO): Promise<void> {
    const indicator = this.repository.create({
      el_id,
      text,
      user_id,
    });
    await this.repository.save(indicator);
  }
}

export { LogsRepository };
