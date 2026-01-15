import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app); // Создаем HTTP сервер на базе Express
const io = new Server(server); // Подключаем Socket.io к этому серверу

// Настройка папки для HTML-файлов 
app.use(express.static('public'));

// Обработка событий 
io.on('connection', (socket) => {
    console.log('Новый пользователь подключился!');

    // Слушаем сообщение от клиента под названием 'chat message'
    socket.on('chat message', (msg) => {
        console.log('Сообщение от клиента: ' + msg);
        
        // Отправляем подтверждение обратно этому же клиенту 
        socket.emit('server response', 'Сервер получил: ' + msg);
    });

    socket.on('disconnect', () => {
        console.log('Пользователь отключился');
    });
});

server.listen(3000, () => {
    console.log('Сервер запущен на http://localhost:3000');
});