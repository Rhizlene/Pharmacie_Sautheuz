// création du routeur Express pour ce module
const express = require('express');
const routeur = express.Router();
const ctrlPatient = require('../controllers/patientController.js');

routeur.get('/', ctrlPatient.controlPat.afficherPatient)
routeur.get('/formulaire', ctrlPatient.controlPat.formulairePatient)
routeur.post('/formulaire', ctrlPatient.controlPat.ajouterPatient)
routeur.get('/modifier/:id', ctrlPatient.controlPat.afficherUnPatient)
routeur.post('/modifier/:id', ctrlPatient.controlPat.modifierpatient)
routeur.get('/supprimer/:id', ctrlPatient.controlPat.supprimerPatient)
routeur.get('/recherche', ctrlPatient.controlPat.rechercherPatient)
routeur.post('/recherche', ctrlPatient.controlPat.afficherRecherchePatient)

module.exports = routeur;