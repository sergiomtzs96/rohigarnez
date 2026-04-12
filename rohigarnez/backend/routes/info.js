const express = require('express');
const router = express.Router();
const Info = require('../models/Info');

// Obtener documento por key
router.get('/:key', async (req, res) => {
  try {
    const data = await Info.findOne({ key: req.params.key });

    if (!data) {
      return res.status(404).json({ message: 'Documento no encontrado' });
    }

    res.json(data);
  } catch (error) {
    res.status(500).json({
      message: 'Error obteniendo información',
      error: error.message
    });
  }
});

module.exports = router;