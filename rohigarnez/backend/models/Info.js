const mongoose = require('mongoose');

const InfoSchema = new mongoose.Schema(
  {
    key: {
      type: String,
      required: true,
      unique: true
    }
  },
  {
    strict: false,
    timestamps: true,
    collection: 'info'
  }
);

module.exports = mongoose.model('Info', InfoSchema);