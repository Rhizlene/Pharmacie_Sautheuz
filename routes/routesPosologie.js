// création du routeur Express pour ce module
const express = require('express');
const routeur = express.Router();
const ctrlPosologie = require('../controllers/posologieController.js');

routeur.get('/:id', ctrlPosologie.controlPos.afficherPosologie)
routeur.get('/formulaire/:id', ctrlPosologie.controlPos.formulairePosologie)
routeur.post('/formulaire', ctrlPosologie.controlPos.ajouterPosologie)
routeur.get('/modifier/:id', ctrlPosologie.controlPos.afficherUnePosologie)
routeur.post('/modifier/:id', ctrlPosologie.controlPos.modifierPosologie)
routeur.get('/supprimer/:id', ctrlPosologie.controlPos.supprimerPosologie)

module.exports = routeur;