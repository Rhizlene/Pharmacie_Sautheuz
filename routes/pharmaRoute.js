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
routeur.get('/intranet/diplome', pharmaControle.pharmacie_intranetDiplome)
routeur.get('/intranet/formulaire/medecin', pharmaControle.pharmacie_formulaireMedecin)
routeur.get('/intranet/formulaire/patient', pharmaControle.pharmacie_formulairePatient)
routeur.get('/intranet/formulaire/mutuelle', pharmaControle.pharmacie_formulaireMutuelle)
routeur.get('/intranet/formulaire/pathologie', pharmaControle.pharmacie_formulairePathologie)
routeur.get('/intranet/formulaire/medicament', pharmaControle.pharmacie_formulaireMedicament)
routeur.get('/intranet/formulaire/diplome', pharmaControle.pharmacie_formulaireDiplome)
routeur.get('/intranet/formulaire/ordonnance', pharmaControle.pharmacie_formulaireOrdonnance)

module.exports = routeur;