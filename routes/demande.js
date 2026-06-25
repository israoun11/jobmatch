const express = require('express');
const router = express.Router();
const Demande = require('../models/demande');

// Apply for a job offer

router.post('/apply', async (req, res) => {
  try {
    let bodyData = req.body;

    
    if (typeof req.body === 'string' || Buffer.isBuffer(req.body)) {
      try {
        bodyData = JSON.parse(req.body.toString());
      } catch (e) {
        return res.status(400).json({ success: false, msg: 'Invalid JSON format received.' });
      }
    }

    const { 
      offreId, 
      applicantId, 
      nameuser, 
      phoneuser, 
      emailuser, 
      address, 
      nivEtude, 
      skills, 
      experience 
    } = bodyData;

    
    if (!offreId || !applicantId || !nameuser || !phoneuser || !emailuser) {
      return res.status(400).json({ 
        success: false,
        msg: 'Required fields are missing! Make sure to send: offreId, applicantId, nameuser, phoneuser, emailuser' 
      });
    }

    const newDemande = new Demande({
      offreId,
      applicantId,
      nameuser,
      phoneuser,
      emailuser,
      address: address || '',
      nivEtude: nivEtude || '',
      skills: Array.isArray(skills) ? skills : (skills ? skills.split(',').map(s => s.trim()) : []),
      experience: experience || '',
      status: 'en cours'
    });

    const savedDemande = await newDemande.save();
    return res.status(201).json({ 
      success: true,
      msg: 'Application submitted successfully!', 
      demande: savedDemande 
    });

  } catch (err) {
    return res.status(500).json({ 
      success: false,
      error: 'Server error during submission', 
      message: err.message 
    });
  }
});

router.get('/all', async (req, res) =>{
  try{
    const demandes = await Demande.find({});
    res.status(200).json(demandes);
  } catch (error) {
    res.status(500).json({ essage: error.message});
  }
})


router.put('/update-status/:id', (req, res) => {
  const { status } = req.body;
  
  
  if (!status) {
    return res.status(400).json({ message: "Status is required" });
  }

  
  Demande.findByIdAndUpdate(req.params.id, { status: status }, { new: true })
    .then(updatedDemande => {
      if (!updatedDemande) {
        return res.status(404).json({ message: "Candidate application not found" });
      }
      res.json(updatedDemande);
    })
    .catch(err => {
      console.error("Backend Error updating status:", err);
      res.status(500).json({ error: err.message });
    });
});


module.exports = router;