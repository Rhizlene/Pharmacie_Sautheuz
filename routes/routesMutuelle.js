// création du routeur Express pour ce module
const express = require('express');
const routeur = express.Router();
const ctrlMutuelle = require('../controllers/mutuelleController.js');

routeur.get('/', ctrlMutuelle.controlMut.afficherMutuelle)

module.exports = routeur;