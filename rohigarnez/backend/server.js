const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();

/* ========================
   MIDDLEWARES
======================== */
app.use(cors());
app.use(express.json());

/* ========================
   ROUTES
======================== */
const authRoutes = require('./routes/authRoutes');
const pagesRoutes = require('./routes/pages');
const servicesRoutes = require('./routes/services');
const projectsRoutes = require('./routes/projects');
const testimonialsHomepageRoutes = require('./routes/testimonialsHomePage');

/* ========================
   API ROUTES
======================== */
app.use('/api/auth', authRoutes);
app.use('/api/pages', pagesRoutes);
app.use('/api/services', servicesRoutes);
app.use('/api/projects', projectsRoutes);
app.use('/api/testimonials-homepage', testimonialsHomepageRoutes);

/* ========================
   HEALTH CHECK
======================== */
app.get('/', (req, res) => {
  res.send('API funcionando 🚀');
});

/* ========================
   SERVER START
======================== */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

/* ========================
   DATABASE CONNECTION
======================== */
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB conectado'))
  .catch(err => console.error('❌ MongoDB error:', err));