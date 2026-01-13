import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const app = express();
app.use(express.json()); // Middleware для парсинга JSON 

const SECRET_KEY = 'your_secret_key'; // В реальном проекте хранить в .env 

// Имитация базы данных 
let users = [
  {
    id: 1,
    username: 'admin',
    email: 'admin@example.com',
    password: await bcrypt.hash('12345', 10),
    role: 'admin'
  },
  {
    id: 2,
    username: 'user1',
    email: 'user1@example.com',
    password: await bcrypt.hash('qwerty', 10),
    role: 'user'
  }
];

// MIDDLEWARES

// Проверка JWT токена 
const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, SECRET_KEY, (err, user) => {
      if (err) return res.status(403).json({ message: 'Token is invalid' });
      req.user = user; // Данные из токена: id, username, role
      next();
    });
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
};

// Проверка роли (Задание 3) 
const authorizeRole = (role) => {
  return (req, res, next) => {
    if (req.user.role !== role) {
      return res.status(403).json({ message: 'Forbidden: Admins only' });
    }
    next();
  };
};

// МАРШРУТЫ

// Логин и генерация токена 
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email);
  
  if (user && await bcrypt.compare(password, user.password)) {
    const token = jwt.sign(
      { id: user.id, username: user.username, role: user.role },
      SECRET_KEY,
      { expiresIn: '1h' }
    );
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// ЗАДАНИЕ 1: Обновление email 
app.put('/update-email', authenticateJWT, (req, res) => {
  const { newEmail } = req.body;
  const user = users.find(u => u.id === req.user.id);

  if (user) {
    user.email = newEmail;
    res.json({ message: 'Email updated', user: { id: user.id, email: user.email } });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// ЗАДАНИЕ 2: Удаление аккаунта 
app.delete('/delete-account', authenticateJWT, (req, res) => {
  const userId = req.user.id;
  const initialLength = users.length;
  users = users.filter(u => u.id !== userId);

  if (users.length < initialLength) {
    res.json({ message: 'Account successfully deleted' });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// ЗАДАНИЕ 3: Обновление роли (только для admin) 
app.patch('/update-role', authenticateJWT, authorizeRole('admin'), (req, res) => {
  const { userId, newRole } = req.body;
  const user = users.find(u => u.id === parseInt(userId));

  if (user) {
    user.role = newRole;
    res.json({ message: `Role for user ${user.username} updated to ${newRole}` });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// ЗАДАНИЕ 4: Обновление JWT токена 
app.post('/refresh-token', authenticateJWT, (req, res) => {
  // Если authenticateJWT прошел, значит текущий токен валиден 
  const newToken = jwt.sign(
    { id: req.user.id, username: req.user.username, role: req.user.role },
    SECRET_KEY,
    { expiresIn: '1h' }
  );
  res.json({ token: newToken });
});

app.listen(3000, () => console.log('Server running on port 3000'));