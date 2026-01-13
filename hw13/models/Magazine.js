const mongoose = require('mongoose');

const magazineSchema = new mongoose.Schema({
  title: { type: String, required: true },
  issueNumber: Number,
  // Ссылка на ID издателя
  publisher: {
    type: mongoose.Schema.Types.ObjectId, // Это тип данных "ID документа"
    ref: 'Publisher' // Указываем, в какой коллекции искать этот ID
  }
});

module.exports = mongoose.model('Magazine', magazineSchema);