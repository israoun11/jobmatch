const mongoose = require('mongoose');

const AnnonceSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  nameuser: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true 
  },
  description: {
    type: String,
    required: true 
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('annonce', AnnonceSchema);