const mongoose = require('mongoose');

const TestimonialSchema = new mongoose.Schema(
  {
    key: {
      type: String,
      required: true,
      unique: true
    },
    title: String,

    testimonials: [
      {
        name: String,
        location: String,
        rating: Number,
        comment: String
      }
    ]
  },
  {
    timestamps: true
  }
);

// 👇 MUY IMPORTANTE: nombre real de la colección
module.exports = mongoose.model('Testimonial', TestimonialSchema, 'testimonials');