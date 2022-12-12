// création du routeur Express pour ce module
const express = require('express');
const routeur = express.Router();
const ctrlPathologie = require('../controllers/pathologieController.js');

routeur.get('/', ctrlPathologie.controlPath.afficherPathologie)
routeur.get('/formulaire', ctrlPathologie.controlPath.formulairePathologie)
routeur.post('/formulaire', ctrlPathologie.controlPath.ajouterPathologie)
routeur.get('/modifier/:id', ctrlPathologie.controlPath.afficherUnePathologie)
routeur.post('/modifier/:id', ctrlPathologie.controlPath.modifierPathologie)
routeur.get('/supprimer/:id', ctrlPathologie.controlPath.supprimerPathologie)

module.exports = routeur;