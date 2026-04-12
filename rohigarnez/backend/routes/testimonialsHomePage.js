const express = require('express');
const router = express.Router();
const TestimonialsHomepage = require('../models/TestimonialsHomePage');

router.get('/', async (req, res) => {
  try {
    const data = await TestimonialsHomepage.findOne({
      key: 'testimonials-homepage'
    });

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener testimonios' });
  }
});

module.exports = router;