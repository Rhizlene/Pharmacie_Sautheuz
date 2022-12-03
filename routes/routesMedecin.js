// création du routeur Express pour ce module
const express = require('express');
const routeur = express.Router();
const ctrlMedecin = require('../controllers/medecinController.js');

routeur.get('/medecin', ctrlMedecin.controlMed.afficherMedecin)
routeur.get('/formulaire/medecin', ctrlMedecin.controlMed.formulaireMedecin)

module.exports = routeur;