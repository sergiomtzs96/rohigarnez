const mongoose = require('mongoose');

const TestimonialsHomepageSchema = new mongoose.Schema({
  key: String,
  title: String,
  testimonials: [
    {
      name: String,
      location: String,
      rating: Number,
      comment: String
    }
  ]
});

module.exports = mongoose.model(
  'TestimonialsHomepage',
  TestimonialsHomepageSchema,
  'testimonials'
);