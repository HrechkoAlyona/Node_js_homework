const fs = require('fs');

// Запись в файл
fs.writeFile('info.txt', 'Node.js is awesome!', 'utf8', (err) => {
  if (err) {
    console.log('Ошибка записи:', err);
    return;
  }
  console.log('Файл info.txt успешно создан и записан');

  // Чтение файла
  fs.readFile('info.txt', 'utf8', (err, data) => {
    if (err) {
      console.log('Ошибка чтения файла:', err);
      return;
    }
    console.log('Содержимое файла:');
    console.log(data);
  });
});
