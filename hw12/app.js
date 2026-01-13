import express from 'express';
import dotenv from 'dotenv';
import { ObjectId } from 'mongodb';
import { connectToDB, getDB } from './db/index.js';

dotenv.config();

const app = express(); // Сначала создаем экземпляр express
app.use(express.json()); // Мидлвар для работы с JSON

const PORT = process.env.PORT || 3000;

// --- МАРШРУТЫ (Задание 2 и 3) ---

// Создание продукта
app.post('/products', async (req, res) => {
    try {
        const { name, price, description } = req.body;
        const db = getDB();
        const result = await db.collection('products').insertOne({ name, price, description });
        res.status(201).json({ _id: result.insertedId, name, price, description });
    } catch (error) {
        res.status(500).json({ error: "Ошибка при создании продукта" });
    }
});

// Получение всех продуктов
app.get('/products', async (req, res) => {
    try {
        const db = getDB();
        const products = await db.collection('products').find().toArray();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: "Ошибка при получении списка" });
    }
});

// Получение одного по ID
app.get('/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        if (!ObjectId.isValid(id)) return res.status(400).json({ error: "Неверный формат ID" });
        
        const db = getDB();
        const product = await db.collection('products').findOne({ _id: new ObjectId(id) });
        if (!product) return res.status(404).json({ error: "Продукт не найден" });
        
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: "Ошибка сервера" });
    }
});

// Обновление продукта
app.put('/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        if (!ObjectId.isValid(id)) return res.status(400).json({ error: "Неверный формат ID" });

        const db = getDB();
        const result = await db.collection('products').updateOne(
            { _id: new ObjectId(id) },
            { $set: req.body }
        );
        res.json({ message: "Обновлено", modifiedCount: result.modifiedCount });
    } catch (error) {
        res.status(500).json({ error: "Ошибка при обновлении" });
    }
});

// Удаление продукта
app.delete('/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        if (!ObjectId.isValid(id)) return res.status(400).json({ error: "Неверный формат ID" });

        const db = getDB();
        const result = await db.collection('products').deleteOne({ _id: new ObjectId(id) });
        res.json({ message: "Удалено", deletedCount: result.deletedCount });
    } catch (error) {
        res.status(500).json({ error: "Ошибка при удалении" });
    }
});

// Запуск базы данных, затем сервера
connectToDB().then(() => {
    app.listen(PORT, () => {
        console.log(`🚀 Server is running on http://localhost:${PORT}`);
    });
});