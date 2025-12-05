// Импортируем модуль http.

// Создаем сервер через http.createServer().

// Проверяем наличие заголовка Authorization в req.headers.

// Если заголовка нет → возвращаем статус 401 и текст "Unauthorized".

// Если заголовок есть → возвращаем статус 200 и текст "Authorization header received".

// Настраиваем сервер на порт 3000.

import http from 'http';

const server = http.createServer((req, res) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    res.statusCode = 401; // Unauthorized
    res.setHeader('Content-Type', 'text/plain');
    res.end('Unauthorized');
  } else {
    res.statusCode = 200; // OK
    res.setHeader('Content-Type', 'text/plain');
    res.end('Authorization header received');
  }
});

server.listen(3000, () => {
  console.log('Сервер с проверкой Authorization запущен на порту 3000');
});
