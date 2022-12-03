// création du routeur Express pour ce module
const express = require('express');
const routeur = express.Router();
const ctrlPatient = require('../controllers/patientController.js');

routeur.get('/', ctrlPatient.controlPat.afficherPatient)
routeur.get('/formulaire', ctrlPatient.controlPat.formulairePatient)

module.exports = routeur;