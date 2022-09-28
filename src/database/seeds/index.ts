import seedUsers from './users';

async function insertData() {
  seedUsers();
}

insertData().then(() => console.log('Dados inseridos!'));
