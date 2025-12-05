import express from "express";
import { db } from "./db.js";

const app = express();
const PORT = 3000;

app.use(express.json());

// Получение всех товаров
app.get("/products", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM products");
    res.json(rows);
  } catch (err) {
    res.status(500).send("Ошибка чтения данных");
  }
});

// Добавление товара
app.post("/products", async (req, res) => {
  try {
    const { name, price } = req.body;

    if (!name || !price) {
      return res.status(400).send("Нужно указать name и price");
    }

    await db.query("INSERT INTO products (name, price) VALUES (?, ?)", [
      name,
      price,
    ]);

    res.send("Товар добавлен!");
  } catch (err) {
    res.status(500).send("Ошибка вставки данных");
  }
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
