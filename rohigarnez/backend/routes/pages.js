const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Page = mongoose.model(
  'Page',
  new mongoose.Schema({}, { strict: false })
);

router.get('/teampage', async (req, res) => {
  try {
    const page = await Page.findOne({ key: 'teampage' });

    if (!page) {
      return res.status(404).json({ message: 'Página no encontrada' });
    }

    res.json(page);
  } catch (error) {
    res.status(500).json({ message: 'Error en servidor' });
  }
});

module.exports = router;