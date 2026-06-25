const mongoose = require('mongoose');

const DemandeSchema = new mongoose.Schema({
  offreId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'offre',
    required: true
  },
  applicantId: {
    type: String,
    required: true
  },
  nameuser: {
    type: String,
    required: true
  },
  phoneuser: {
    type: String,
    required: true
  },
  emailuser: {
    type: String,
    required: true
  },
  address: {
    type: String
  },
  nivEtude: {
    type: String
  },
  skills: [{
    type: String
  }],
  experience: {
    type: String
  },
  status: {
    type: String,
    enum: ['en cours', 'accepted', 'rejected'],
    default: 'en cours'
  },
  dateDemande: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('demande', DemandeSchema);