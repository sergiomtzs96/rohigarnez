const express = require('express');
const router = express.Router();
const Projects = require('../models/Projects');

// GET for key

router.get('/:key', async (req, res) => {
    try {
        const page = await Projects.findOne({ key: req.params.key });

        if (!page) {
            return res.status(404).json({ message: 'Página no encontrada' });
        }

        res.json(page);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la página' });
    }
});

module.exports = router;