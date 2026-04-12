const express = require('express');
const router = express.Router();
const TestimonialsHomePage = require('../models/TestimonialsHomePage');

router.get('/:key', async (req, res) => {
  try {
    const data = await TestimonialsHomePage.findOne({
      key: req.params.key
    });

    if (!data) {
      return res.status(404).json({
        message: 'Testimonios no encontrados'
      });
    }

    res.json(data);
  } catch (error) {
    res.status(500).json({
      message: 'Error obteniendo testimonios',
      error
    });
  }
});

module.exports = router;