import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Импорт моделей (убедись, что файлы Category.js и Product.js лежат в папке models)
import Category from './models/Category.js';
import Product from './models/Product.js';

// Загрузка переменных окружения
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// МИДЛВАР ДЛЯ ПАРСИНГА JSON
app.use(express.json());

// --- МАРШРУТЫ ---

// 1. Добавить новую категорию
app.post('/categories', async (req, res) => {
  try {
    const category = await Category.create(req.body);
    res.status(201).json(category);
  } catch (err) {
    res.status(500).json({ error: 'Ошибка при создании категории', details: err });
  }
});

// 2. Добавить новый продукт
app.post('/products', async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ error: 'Ошибка при создании продукта', details: err });
  }
});

// 3. Получить все продукты с данными об их категориях (POPULATE)
app.get('/products', async (req, res) => {
  try {
    const products = await Product.find().populate('category');
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Ошибка при получении продуктов', details: err });
  }
});

// --- ПОДКЛЮЧЕНИЕ К БАЗЕ ДАННЫХ ---
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log(' MongoDB connected');
    // Запуск сервера только после успешного подключения к БД
    app.listen(PORT, () => {
      console.log(` Server started on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error(' MongoDB connection error:', err);
  });