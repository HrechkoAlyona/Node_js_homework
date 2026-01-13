import express from 'express';
import bcrypt from 'bcrypt';

const app = express();
app.use(express.json());

// Временное хранилище пользователей - база данных
let users = [];
let currentId = 1;

// Middleware: симуляция авторизации
 
 function authMiddleware(req, res, next) {
// считаем, что пользователь с id = 1 залогинен
   const user = users.find(u => u.id === 1);

   if (!user) {
     return res.status(401).json({ message: 'Not authenticated' });
   }
   req.user = user;
   next();
 }

// Middleware: проверка смены пароля
 
function mustChangePasswordMiddleware(req, res, next) {
  if (req.user.mustChangePassword) {
    return res.status(403).json({
      message: 'You must change your password'
    });
  }
  next();
}

// Middleware: проверка роли



function adminMiddleware(req, res, next) {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Access denied' });
  }
  next();
}

// ЗАДАЧА 1

app.post('/register', async (req, res) => {
  const { email, password } = req.body;

  // Проверка уникальности email
  const existingUser = users.find(u => u.email === email);
  if (existingUser) {
    return res.status(400).json({
      message: 'Email already registered'
    });
  }

  // Хэширование пароля
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    id: currentId++,
    email,
    password: hashedPassword,
    mustChangePassword: false,
    role: 'user'
  };

  users.push(newUser);

  res.json({ message: 'User registered successfully' });
});

//ЗАДАЧА 2 Смена пароля

app.post(
  '/change-password',
  authMiddleware,
  async (req, res) => {
    const { newPassword } = req.body;

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    req.user.password = hashedPassword;
    req.user.mustChangePassword = false;

    res.json({ message: 'Password changed successfully' });
  }
);

//ЗАДАЧА 3 Удаление аккаунта

app.post('/delete-account', authMiddleware, async (req, res) => {
  const { password } = req.body;

  const isMatch = await bcrypt.compare(password, req.user.password);
  if (!isMatch) {
    return res.status(400).json({
      message: 'Incorrect password'
    });
  }

  users = users.filter(u => u.id !== req.user.id);

  res.json({ message: 'Account deleted successfully' });
});

 //ЗАДАЧА 4

app.get(
  '/admin',
  authMiddleware,
  adminMiddleware,
  (req, res) => {
    res.json({ message: 'Welcome, admin!' });
  }
);


 // ЗАДАЧА 5

app.post('/change-email', authMiddleware, async (req, res) => {
  const { newEmail, password } = req.body;

  // Проверка пароля
  const isMatch = await bcrypt.compare(password, req.user.password);
  if (!isMatch) {
    return res.status(400).json({ message: 'Incorrect password' });
  }

  // Проверка уникальности email
  const emailExists = users.find(u => u.email === newEmail);
  if (emailExists) {
    return res.status(400).json({
      message: 'Email already in use'
    });
  }

  req.user.email = newEmail;

  res.json({ message: 'Email updated successfully' });
});


// Запуск сервера

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
