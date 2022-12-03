// création du routeur Express pour ce module
const express = require('express');
const routeur = express.Router();
const ctrlMedicament = require('../controllers/medicamentController.js');

routeur.get('/medicament', ctrlMedicament.controlMedic.afficherMedicament)

module.exports = routeur;