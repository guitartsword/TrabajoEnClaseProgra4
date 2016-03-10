var mongoose = require('mongoose');

var LibroSchema = new mongoose.Schema({
  title : String,
  year : Number,
  editorial : String,
  author: String
});

module.exports = mongoose.model('Libro', LibroSchema);
