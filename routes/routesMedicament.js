// création du routeur Express pour ce module
const express = require('express');
const routeur = express.Router();
const ctrlMedicament = require('../controllers/medicamentController.js');

routeur.get('/', ctrlMedicament.controlMedic.afficherMedicament)
routeur.get('/formulaire', ctrlMedicament.controlMedic.formulaireMedicament)
routeur.post('/formulaire', ctrlMedicament.controlMedic.ajouterMedicament)
routeur.get('/modifier/:id', ctrlMedicament.controlMedic.afficherUnMedicament)
routeur.post('/modifier/:id', ctrlMedicament.controlMedic.modifierMedicament)
routeur.get('/supprimer/:id', ctrlMedicament.controlMedic.supprimerMedicament)

module.exports = routeur;