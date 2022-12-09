// création du routeur Express pour ce module
const express = require('express');
const routeur = express.Router();
const ctrlMedecin = require('../controllers/medecinController.js');

routeur.get('/', ctrlMedecin.controlMed.afficherMedecin)
routeur.get('/formulaire', ctrlMedecin.controlMed.formulaireMedecin)
routeur.get('/modifier/:id', ctrlMedecin.controlMed.afficherUnMedecin)
routeur.post('/modifier/:id', ctrlMedecin.controlMed.modifierMedecin)
routeur.post('/formulaire', ctrlMedecin.controlMed.ajouterMedecin)

module.exports = routeur;