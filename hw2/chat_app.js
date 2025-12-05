// Импортируем встроенный модуль events
const EventEmitter = require('events');

// Создаем экземпляр EventEmitter
const chat = new EventEmitter();

/**
 * sendMessage(user, message, emitter)
 * user — имя пользователя
 * message — текст сообщения
 * emitter — экземпляр EventEmitter
 */
function sendMessage(user, message, emitter) {
    // Генерируем событие "message"
    emitter.emit('message', { user, message });
}

// Регистрируем обработчик события "message"
chat.on('message', (data) => {
    console.log(`${data.user}: ${data.message}`);
});

// Вызываем sendMessage несколько раз
sendMessage("Alice", "Привет! Как дела?", chat);
sendMessage("Bob", "Все отлично, спасибо!", chat);
sendMessage("Charlie", "Я тоже в чате!", chat);
