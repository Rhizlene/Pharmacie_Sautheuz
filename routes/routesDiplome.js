// création du routeur Express pour ce module
const express = require('express');
const routeur = express.Router();
const ctrlDiplome = require('../controllers/diplomeController.js');

routeur.get('/', ctrlDiplome.controlDip.afficherDiplome)
routeur.get('/formulaire', ctrlDiplome.controlDip.formulaireDiplome)
routeur.post('/formulaire', ctrlDiplome.controlDip.ajouterDiplome)
routeur.get('/modifier/:id', ctrlDiplome.controlDip.afficherUnDiplome)
routeur.post('/modifier/:id', ctrlDiplome.controlDip.modifierDiplome)
routeur.get('/supprimer/:id', ctrlDiplome.controlDip.supprimerDiplome)

module.exports = routeur;