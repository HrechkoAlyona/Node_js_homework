import moment from 'moment';

// Получаем текущую дату и время
const now = moment();

// Форматируем дату в разные форматы
const format1 = now.format('DD-MM-YYYY');
const format2 = now.format('MMM Do YY');
const format3 = now.format('dddd');

// Выводим результаты
console.log('Формат DD-MM-YYYY:', format1);
console.log('Формат MMM Do YY:', format2);
console.log('Формат дня недели:', format3);
