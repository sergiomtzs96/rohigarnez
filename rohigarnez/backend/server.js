const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// RUTAS
const authRoutes = require('./routes/authRoutes');
const pagesRoutes = require('./routes/pages'); // 👈 FIX AQUÍ

app.use('/api/auth', authRoutes);
app.use('/api/pages', pagesRoutes);

// Ruta prueba
app.get('/', (req, res) => {
  res.send('API funcionando 🚀');
});

// MongoDB + Server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB conectado');

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
    });
  })
  .catch(err => console.error('❌ Error MongoDB:', err));