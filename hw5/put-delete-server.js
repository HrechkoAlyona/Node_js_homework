// Импортируем http.

// Создаем сервер через http.createServer().

// Проверяем метод запроса (req.method).

// Если PUT → ответ "PUT-запрос обработан".

// Если DELETE → ответ "DELETE-запрос обработан".

// Устанавливаем статус 200 и заголовок Content-Type: text/plain.

// Сервер слушает порт 3000.

import http from 'http';

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.method === 'PUT') {
    res.statusCode = 200;
    res.end('PUT-запрос обработан');
  } else if (req.method === 'DELETE') {
    res.statusCode = 200;
    res.end('DELETE-запрос обработан');
  } else {
    res.statusCode = 405;
    res.end('Метод не поддерживается');
  }
});

server.listen(3000, () => {
  console.log('Сервер для PUT и DELETE запущен на порту 3000');
});
