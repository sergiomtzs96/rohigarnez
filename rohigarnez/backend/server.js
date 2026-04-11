const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// RUTAS
const authRoutes = require('./routes/authRoutes');
const pagesRoutes = require('./routes/pages');
const servicesRoutes = require('./routes/services');

app.use('/api/auth', authRoutes);
app.use('/api/pages', pagesRoutes);
app.use('/api/services', servicesRoutes);
// Ruta prueba
app.get('/', (req, res) => {
  res.send('API funcionando 🚀');
});

const PORT = process.env.PORT || 5000;

// 🔥 ARRANCAR SERVER PRIMERO
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

// 🔥 CONECTAR MONGO DESPUÉS (sin bloquear servidor)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB conectado'))
  .catch(err => console.error('❌ MongoDB error:', err));