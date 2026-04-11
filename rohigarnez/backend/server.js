const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('API funcionando 🚀');
});

// Puerto
const PORT = process.env.PORT || 5000;

// Iniciar servidor SIEMPRE
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);

  // Conexión a Mongo después de arrancar server
  mongoose.connect(process.env.MONGO_URI)
    .then(() => {
      console.log('✅ MongoDB conectado');
    })
    .catch((err) => {
      console.error('❌ Error conectando a MongoDB:', err.message);
    });
});