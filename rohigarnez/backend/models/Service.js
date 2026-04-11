const mongoose = require ('mongoose');

const serviceSchema = new mongoose.Schema({
    key: String,
    hero: Object,
    stats: Array,
    serviceCategory: Array
});

module.exports = mongoose.model('Service', serviceSchema);