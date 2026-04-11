const express = require('express');
const router = express.Router();
const Service = require('../models/Service');


// GET por key
router.get('/:key', async (req, res) => {
    try {
        const page = await Service.findOne({ key: req.params.key });

        if (!page) {
            return res.status(404).json({ message: 'Página no encontrada' });
        }

        res.json(page);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error en servidor' });
    }
});

module.exports = router;