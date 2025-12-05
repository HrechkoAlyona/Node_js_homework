// Импортируем http и fs.

// Создаем сервер через http.createServer().

// В callback используем try-catch, специально вызываем ошибку.

// Логируем ошибки в файл errors.log через fs.appendFile().

// Возвращаем статус 500 и текст "Internal Server Error".

// Сервер слушает порт 3000.

import http from 'http';
import fs from 'fs';
import path from 'path';

const errorLogPath = path.join('.', 'errors.log');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  try {
    // Искусственная ошибка для теста
    throw new Error('Тестовая ошибка сервера');

  } catch (err) {
    // Логирование ошибки в файл
    const errorMessage = `${new Date().toISOString()} - ${err.message}\n`;
    fs.appendFile(errorLogPath, errorMessage, (error) => {
      if (error) console.error('Ошибка записи в файл:', error);
    });

    // Отправка ответа клиенту
    res.statusCode = 500;
    res.end('Internal Server Error');
  }
});

server.listen(3000, () => {
  console.log('Сервер с логированием ошибок запущен на порту 3000');
});
