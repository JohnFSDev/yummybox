const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

// Generar JWT
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '40s' });
};

// Registro de usuario
exports.register = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Verificar si el usuario ya existe
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'El usuario ya existe.' });
    }

    // Crear nuevo usuario
    const user = await User.create({ email, password });

    // Generar token
    const token = generateToken(user._id);

    res.status(201).json({ token, user: { id: user._id, email: user.email } });
  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor', error });
  }
};

// Login de usuario
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Verificar si el usuario existe
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Credenciales incorrectas.' });
    }

    // Verificar la contraseña
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Credenciales incorrectas.' });
    }

    // Generar token
    const token = generateToken(user._id);

    res.status(200).json({ token, user: { id: user._id, email: user.email } });
  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor', error });
  }
};
