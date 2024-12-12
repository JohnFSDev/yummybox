const express = require('express');
const dotenv = require('dotenv');
const connectDatabase = require('./config/database');

//Cargar las variables de entorno
dotenv.config();

//Conectarme a la base de datos
connectDatabase();

const app = express();

// Middlewares
app.use(express.json());

// Rutas
app.get('/', (req, res) => {
  res.send('¡Bienvenido a YummyBox API!');
});

// Rutas de autenticación
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

//Rutas para las recetas
const recipesRouter = require('./routes/recipe');
app.use('/api/recipes', recipesRouter);

// Puerto
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});