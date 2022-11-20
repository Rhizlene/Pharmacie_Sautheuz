// création du routeur Express pour ce module
const express = require('express');
const routeur = express.Router();
const pharmaControle = require('../controllers/pharmaControllers.js');

routeur.get('/accueil', pharmaControle.pharmacie_accueil)
routeur.get('/inscription', pharmaControle.pharmacie_inscription)
routeur.get('/intranet/accueil', pharmaControle.pharmacie_intranetAccueil)
routeur.get('/intranet/medecin', pharmaControle.pharmacie_intranetMedecin)
routeur.get('/intranet/ordonnance', pharmaControle.pharmacie_intranetOrdonnance)
routeur.get('/intranet/patient', pharmaControle.pharmacie_intranetPatient)
routeur.get('/intranet/mutuelle', pharmaControle.pharmacie_intranetMutuelle)
routeur.get('/intranet/pathologie', pharmaControle.pharmacie_intranetPathologie)
routeur.get('/intranet/medicament', pharmaControle.pharmacie_intranetMedicament)

module.exports = routeur;