const express = require('express');
const cors = require('cors');
const jsonServer = require('json-server');

const app = express();

app.use(
    cors({
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization', 'range'],
    })
);

const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

app.use(middlewares);

// Middleware для пагинации
app.use('/users', (req, res, next) => {
    const { filter, range, sort } = req.query;

    // Преобразование параметров запроса в объекты
    const filterObj = JSON.parse(decodeURIComponent(filter));
    const rangeObj = JSON.parse(decodeURIComponent(range));
    const sortObj = JSON.parse(decodeURIComponent(sort));

    // Получение списка пользователей
    const users = req.method === 'GET' ? router.db.get('users').value() : [];

    // Фильтрация
    const filteredUsers = users.filter(user => {
        let isMatch = true;
        for (const [key, value] of Object.entries(filterObj)) {
            if (user[key] !== value) {
                isMatch = false;
                break;
            }
        }
        return isMatch;
    });

    // Сортировка
    const sortedUsers = sortObj.length > 0 ? filteredUsers.sort((a, b) => (a[sortObj[0]] > b[sortObj[0]] ? 1 : -1)) : filteredUsers;

    // Пагинация
    const paginatedUsers = rangeObj.length > 0 ? sortedUsers.slice(rangeObj[0], rangeObj[1]) : sortedUsers;

    // Установка заголовков для пагинации
    res.set('X-Total-Count', users.length);
    res.set('Access-Control-Expose-Headers', 'X-Total-Count');

    // Отправка ответа
    if (req.method === 'GET') {
        res.json(paginatedUsers);
    } else {
        next();
    }
});

app.use(router);

app.listen(3001, () => {
    console.log('Сервер запущен на порту 3001');
});
