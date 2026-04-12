const express = require('express');
const router = express.Router();
const Testimonial = require('../models/Testimonial');

// GET por key (dinámico)
router.get('/:key', async (req, res) => {
  try {
    const data = await Testimonial.findOne({ key: req.params.key });

    if (!data) {
      return res.status(404).json({ message: 'Testimonios no encontrados' });
    }

    res.json(data);
  } catch (error) {
    res.status(500).json({
      message: 'Error al obtener testimonios',
      error: error.message
    });
  }
});

module.exports = router;