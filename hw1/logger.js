const fs = require('fs');
const path = require('path');

const logFile = path.join(__dirname, 'log.txt');

function logMessage(message) {

  const text = typeof message === 'string' ? message : JSON.stringify(message);

  const timestamp = new Date().toISOString(); // стандартный формат времени
  const line = `${timestamp} - ${text}\n`; // добавляем перевод строки

  // fs.appendFile — асинхронный, неблокирующий
  fs.appendFile(logFile, line, 'utf8', (err) => {
    if (err) {
      // Обработка ошибки записи
      console.error('Ошибка записи в лог:', err);
      return;
    }
   
    console.log('Записано в лог:', line.trim());
  });
}

module.exports = { logMessage };
