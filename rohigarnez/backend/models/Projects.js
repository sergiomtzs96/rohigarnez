const mongoose = require('mongoose');

const ProjectsSchema = new mongoose.Schema(
  {
    key: {
      type: String,
      required: true,
      unique: true
    },

    title: String,

    // Para infoProjectsPage
    categories: [
      {
        id: String,
        label: String
      }
    ],

    stats: [
      {
        label: String,
        value: mongoose.Schema.Types.Mixed,
        icon: String
      }
    ],

    workProcess: [
      {
        step: Number,
        title: String,
        description: String
      }
    ],

    // Para projects page
    projects: [
      {
        id: Number,
        title: String,
        category: String,
        description: String,
        client: String,
        location: String,
        year: mongoose.Schema.Types.Mixed,
        duration: String,
        image: String,
        highlights: [String],
        specs: {
          surface: String,
          volume: String,
          tech: String
        }
      }
    ]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Projects', ProjectsSchema);