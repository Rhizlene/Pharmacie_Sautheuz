// création du routeur Express pour ce module
const express = require('express');
const routeur = express.Router();
const ctrlOrdonnance = require('../controllers/ordonnanceController.js');

routeur.get('/', ctrlOrdonnance.controlOrdo.afficherOrdonnance)
routeur.get('/formulaire', ctrlOrdonnance.controlOrdo.formulaireOrdonnance)
routeur.post('/formulaire', ctrlOrdonnance.controlOrdo.ajouterOrdonnance)
routeur.get('/modifier/:id', ctrlOrdonnance.controlOrdo.afficherUneOrdonnance)
routeur.post('/modifier/:id', ctrlOrdonnance.controlOrdo.modifierOrdonnance)
routeur.get("/supprimer/:id", ctrlOrdonnance.controlOrdo.supprimerOrdonnance)

module.exports = routeur;