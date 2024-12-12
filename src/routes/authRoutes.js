const express = require('express');
const { register, login } = require('../controllers/authController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

// Rutas de autenticación
router.post('/register', register);
router.post('/login', login);

// Ruta protegida de ejemplo
router.get('/protected', protect, (req, res) => {
  res.json({ message: 'Bienvenido a la ruta protegida.', user: req.user });
});

module.exports = router;
