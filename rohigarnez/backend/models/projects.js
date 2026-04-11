const mongoose = require('mongoose');

const ProjectsSchema = new mongoose.Schema({
    key: {
        type: String,
        required: true,
        unique: true
    },

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
    ]
}, {
    timestamps: true
});

module.exports = mongoose.model('Projects', ProjectsSchema);