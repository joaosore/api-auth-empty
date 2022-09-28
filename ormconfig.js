let dir = '';

switch (process.env.NODE_ENV) {
  case 'production':
  case 'homolog':
  case 'docker':
    dir = 'dist';
    file = 'js';
    break;
  default:
    dir = 'src';
    file = 'ts';
    break;
}

module.exports = {
  type: 'postgres',
  port: process.env.POSTGRES_PORT,
  host: process.env.POSTGRES_HOST,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  migrations: [`./${dir}/database/migrations/*.${file}`],
  entities: [`./${dir}/modules/**/infra/typeorm/entities/*.${file}`],
  cli: {
    migrationsDir: `./${dir}/database/migrations`,
  },
};
