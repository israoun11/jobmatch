const express = require('express');
const router = express.Router();
const Offre = require('../models/offre');


//  Publish a new Job Offer

router.post('/add', async (req, res) => {
  try {
    const { 
      employerId, name, company, description, skills, 
      experience, localisation, type, typeContrat, 
      remuneration, duree, category 
    } = req.body;

    if (!employerId || !name || !company || !description || !localisation || !typeContrat || !category) {
      return res.status(400).json({ success: false, msg: 'Please enter all required fields.' });
    }

    const newOffre = new Offre({
      employerId,
      name,
      company,
      description,
      skills: Array.isArray(skills) ? skills : (skills ? skills.split(',').map(s => s.trim()) : []),
      experience: experience || 'Not specified',
      localisation,
      type: type || 'On-site',
      typeContrat,
      remuneration: remuneration || 'Negotiable',
      duree: duree || 'Permanent',
      category
    });

    const savedOffre = await newOffre.save();
    return res.status(201).json({ success: true, msg: 'Job offer published successfully!', offre: savedOffre });

  } catch (err) {
    return res.status(500).json({ success: false, error: 'Server error', message: err.message });
  }
});

// Get all job offers

router.get('/all', async (req, res) => {
  try {
    const offres = await Offre.find().sort({ createdAt: -1 });
    return res.status(200).json(offres);
  } catch (err) {
    return res.status(500).json({ success: false, error: 'Server error', message: err.message });
  }
});



module.exports = router;