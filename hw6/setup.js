import { db } from "./db.js";

async function setup() {
  await db.query(`
    CREATE TABLE IF NOT EXISTS products (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255),
      price DECIMAL(10,2)
    )
  `);

  console.log("Таблица products создана!");
  process.exit();
}

setup();
