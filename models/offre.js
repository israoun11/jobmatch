const mongoose = require('mongoose');

const OffreSchema = new mongoose.Schema({
  employerId: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  skills: [{
    type: String
  }],
  experience: {
    type: String
  },
  localisation: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'On-site'
  },
  typeContrat: {
    type: String,
    required: true
  },
  remuneration: {
    type: String
  },
  duree: {
    type: String
  },
  category: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('offre', OffreSchema);