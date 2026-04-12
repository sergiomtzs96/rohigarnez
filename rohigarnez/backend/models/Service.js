const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema(
  {
    key: {
      type: String,
      required: true,
      unique: true
    },
    title: String,

    // 🔥 TODO el contenido dinámico
    content: mongoose.Schema.Types.Mixed
  },
  {
    timestamps: true
  }
);

// 👇 importante: nombre real de la colección
module.exports = mongoose.model('Service', ServiceSchema, 'services');