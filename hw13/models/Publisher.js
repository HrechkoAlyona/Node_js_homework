const mongoose = require('mongoose');

const publisherSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: String
});

module.exports = mongoose.model('Publisher', publisherSchema);