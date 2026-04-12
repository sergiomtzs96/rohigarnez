const express = require('express');
const router = express.Router();
const Service = require('../models/Service');

// 🔥 GET por key (dinámico para TODAS las páginas)
router.get('/:key', async (req, res) => {
  try {
    const service = await Service.findOne({ key: req.params.key });

    if (!service) {
      return res.status(404).json({ message: 'Servicio no encontrado' });
    }

    res.json(service);
  } catch (error) {
    res.status(500).json({
      message: 'Error al obtener servicio',
      error: error.message
    });
  }
});

module.exports = router;