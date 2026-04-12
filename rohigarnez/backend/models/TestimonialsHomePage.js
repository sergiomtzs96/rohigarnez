const mongoose = require('mongoose');

const TestimonialsHomePageSchema = new mongoose.Schema(
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

module.exports = mongoose.model(
  'TestimonialsHomePage',
  TestimonialsHomePageSchema
);