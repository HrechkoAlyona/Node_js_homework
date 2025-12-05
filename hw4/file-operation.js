import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

// Загружаем переменные окружения из .env
dotenv.config();

// Получаем __dirname в ES-модуле
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Получаем имя файла из .env
const filename = process.env.FILENAME || 'default.txt';
const filePath = path.join(__dirname, filename);

// Записываем текст в файл
fs.writeFile(filePath, 'Hello! Node.js is awesome!', 'utf8', (err) => {
  if (err) {
    console.error('Ошибка записи в файл:', err);
    return;
  }
  console.log(`Файл ${filename} успешно создан!`);

  // Читаем содержимое файла
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Ошибка чтения файла:', err);
      return;
    }
    console.log(`Содержимое файла ${filename}:`);
    console.log(data);
  });
});
