import express from 'express';
import sequelize from './config/db.js';
import Book from './models/book.js';

const app = express();
const PORT = 3000;

/* Middleware для JSON */
app.use(express.json());

/* Проверка подключения к БД */
sequelize.authenticate()
  .then(() => console.log('Database connected'))
  .catch(err => console.error('DB error:', err));

/* GET — получить все книги */
app.get('/books', async (req, res) => {
  const books = await Book.findAll();
  res.json(books);
});

/* POST — создать книгу */
app.post('/books', async (req, res) => {
  const { title, author, year } = req.body;
  const book = await Book.create({ title, author, year });
  res.json(book);
});

/* PUT — обновить книгу */
app.put('/books/:id', async (req, res) => {
  const { id } = req.params;

  await Book.update(req.body, {
    where: { id },
  });

  res.json({ message: 'Book updated' });
});

/* DELETE — удалить книгу */
app.delete('/books/:id', async (req, res) => {
  const { id } = req.params;

  await Book.destroy({
    where: { id },
  });

  res.json({ message: 'Book deleted' });
});

/* Запуск сервера */
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
