const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
// Импорт моделей
const Publisher = require('./models/Publisher');
const Magazine = require('./models/Magazine');
const Article = require('./models/Article');
const Tag = require('./models/Tag');

const app = express();
const PORT = 3000;

// Строка подключения  
const dbURI = 'mongodb://localhost:27017/my_database';

// Управление подключением с обработкой успеха и ошибок 
mongoose.connect(dbURI)
  .then(() => {
    console.log('Успешное подключение к MongoDB'); // Сообщение для теста 
    app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));
  })
  .catch((err) => console.error('Ошибка подключения:', err)); 