import express from "express";
import App from "./models/App.js";
import sequelize from "./config/db.js";

const app = express();
const PORT = 3000;

app.use(express.json());

// GET /apps — вывод всех приложений
app.get("/apps", async (req, res) => {
  try {
    const apps = await App.findAll();
    res.json(apps);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// POST /apps — добавление нового приложения
app.post("/apps", async (req, res) => {
  const { name, size } = req.body;
  if (!name || !size) {
    return res.status(400).json({ message: "Name and size are required" });
  }

  try {
    const newApp = await App.create({ name, size });
    res.status(201).json(newApp);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Проверка подключения к БД и запуск сервера
sequelize
  .authenticate()
  .then(() => {
    console.log("Соединение с базой данных успешно установлено!");
    app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));
  })
  .catch((err) => {
    console.error("Не удалось подключиться к базе данных:", err);
  });
