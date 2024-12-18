

const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const pool = require("db");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware для обработки JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Маршрут для регистрации пользователя
app.post("/register", async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;

  // Проверка данных
  if (!username || !email || !password || !confirmPassword) {
    return res.status(400).json({ error: "Все поля обязательны." });
  }
  if (password !== confirmPassword) {
    return res.status(400).json({ error: "Пароли не совпадают." });
  }

  try {
    // Проверка существования email
    const existingUser = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    if (existingUser.rows.length > 0) {
      return res.status(400).json({ error: "Этот email уже зарегистрирован." });
    }

    // Хеширование пароля
    const hashedPassword = await bcrypt.hash(password, 10);

    // Сохранение пользователя в базу данных
    await pool.query(
      "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)",
      [username, email, hashedPassword]
    );

    res.status(201).json({ message: "Пользователь успешно зарегистрирован!" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Ошибка сервера." });
  }
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
