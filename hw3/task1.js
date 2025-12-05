const fs = require('fs');

// Создать каталог
fs.mkdir('myFolder', (err) => {
  if (err) {
    console.log('Ошибка создания каталога:', err);
    return;
  }
  console.log('Каталог myFolder успешно создан');

  // Удалить каталог
  fs.rmdir('myFolder', (err) => {
    if (err) {
      console.log('Ошибка удаления каталога:', err);
      return;
    }
    console.log('Каталог myFolder успешно удалён');
  });
});
