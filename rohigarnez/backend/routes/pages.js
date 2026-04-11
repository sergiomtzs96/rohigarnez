const express = require('express');
const router = Router();
import { model, Schema } from 'mongoose';

const Page = model(
  'Page',
  new Schema({}, { strict: false })
);

// 👉 UNA SOLA RUTA DINÁMICA
router.get('/:key', async (req, res) => {
  try {
    const page = await Page.findOne({ key: req.params.key });

    if (!page) {
      return res.status(404).json({ message: 'Página no encontrada' });
    }

    res.json(page);
  } catch (err) {
    res.status(500).json({ message: 'Error en servidor' });
  }
});

export default router;