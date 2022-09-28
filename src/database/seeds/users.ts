import { hash } from 'bcrypt';
import { v4 as uuidV4 } from 'uuid';

import createConnection from '../index';

const seedUsers = async () => {
  const connection = await createConnection();

  const id = uuidV4();
  const password = await hash(process.env.PASSWORD, 8);

  const exists = await connection.query(`SELECT * FROM USERS`);

  if (exists.length === 0) {
    await connection.query(
      `INSERT INTO USERS(id, name, email, password, created_at)
        values ('${id}', 'First User', '${process.env.USER}', '${password}', 'now()')`,
    );
  } else {
    console.log('Roles Exists');
  }
};

export default seedUsers;
