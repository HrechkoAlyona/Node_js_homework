const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
  name: { type: String, required: true },
  // Массив ссылок на статьи
  articles: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Article'
  }]
});

module.exports = mongoose.model('Tag', tagSchema); 