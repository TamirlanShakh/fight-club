const express = require('express');
const app = express();

// Middleware для парсинга JSON
app.use(express.json());

const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json');
const db = low(adapter);

// Middleware для парсинга JSON
app.use(express.json());

// Получение списка тренеров
app.get('/admin/coaches', (req, res) => {
    res.json(db.get('coaches').value());
});

// Добавление нового тренера
app.post('/admin/coaches', (req, res) => {
    const coach = req.body;
    db.get('coaches').push(coach).write();
    res.json(coach);
});
