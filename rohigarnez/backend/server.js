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
const infoRoutes = require('./routes/info');
const projectsRoutes = require('./routes/projects');
const servicesRoutes = require('./routes/services');
const testimonialsRoutes = require('./routes/testimonials');

/* ========================
   API ROUTES
======================== */
app.use('/api/auth', authRoutes);
app.use('/api/info', infoRoutes); //  /api/info/homepage || aboutpage || teampage || contactpage || brandspage
app.use('/api/projects', projectsRoutes); //   /api/projects/infoProjectsPage || projects
app.use('/api/services', servicesRoutes); //   /api/services/poolrehabilitationpage || saltchlorinatorpage || ...
app.use('/api/testimonials', testimonialsRoutes); //   /api/testimonials/testimonials-homepage
 
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