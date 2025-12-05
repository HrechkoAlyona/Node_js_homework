const { logMessage } = require('./logger');

logMessage('Приложение запущено');
logMessage('Пользователь авторизовался');
logMessage({ event: 'order_created', orderId: 12345 });

setTimeout(() => {
  logMessage('Асинхронное сообщение спустя 500ms');
}, 500);

console.log('app.js: все вызовы logMessage отправлены (они выполняются асинхронно).');
