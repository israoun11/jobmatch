const express = require('express');
const router = express.Router();
const Annonce = require('../models/Annonce');


// POST http://localhost:5000/annonce/add
router.post('/add', async (req, res) => {
  try {
    const { userId, nameuser, phone, email, title, description } = req.body;

    if (!userId || !nameuser || !phone || !email || !title || !description) {
      return res.status(400).json({ success: false, msg: 'Please enter all required fields.' });
    }

    const newAnnonce = new Annonce({
      userId, nameuser, phone, email, title, description
    });

    const savedAnnonce = await newAnnonce.save();
    return res.status(201).json({ success: true, msg: 'Your job search announcement published!', annonce: savedAnnonce });
  } catch (err) {
    return res.status(500).json({ success: false, error: 'Server error', message: err.message });
  }
});


// GET http://localhost:5000/annonce/all
router.get('/all', async (req, res) => {
  try {
    const annonces = await Annonce.find().sort({ createdAt: -1 });
    return res.status(200).json(annonces);
  } catch (err) {
    return res.status(500).json({ success: false, error: 'Server error', message: err.message });
  }
});

module.exports = router;