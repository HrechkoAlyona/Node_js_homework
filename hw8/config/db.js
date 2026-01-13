import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
  'books_db',   // имя БД
  'root',       // пользователь
  '12345',   // пароль
  {
    host: '127.0.0.1',
    dialect: 'mysql',
  }
);

export default sequelize;
