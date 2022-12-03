// création du routeur Express pour ce module
const express = require('express');
const routeur = express.Router();
const ctrlMutuelle = require('../controllers/mutuelleController.js');

routeur.get('/mutuelle', ctrlMutuelle.controlPat.afficherPatient)

module.exports = routeur;