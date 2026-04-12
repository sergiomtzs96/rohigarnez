const mongoose = require('mongoose');

const ProjectsSchema = new mongoose.Schema(
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
    collection: 'projects'
  }
);

module.exports = mongoose.model('Projects', ProjectsSchema);