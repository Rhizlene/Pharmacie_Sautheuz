// création du routeur Express pour ce module
const express = require('express');
const routeur = express.Router();
const ctrlMutuelle = require('../controllers/mutuelleController.js');

routeur.get('/', ctrlMutuelle.controlMut.afficherMutuelle)
routeur.get('/formulaire', ctrlMutuelle.controlMut.formulaireMutuelle)
routeur.post('/formulaire', ctrlMutuelle.controlMut.ajouterMutuelle)
routeur.get('/modifier/:id', ctrlMutuelle.controlMut.afficherUneMutuelle)
routeur.post('/modifier/:id', ctrlMutuelle.controlMut.modifierMutuelle)
routeur.get('/supprimer/:id', ctrlMutuelle.controlMut.supprimerMutuelle)

module.exports = routeur;