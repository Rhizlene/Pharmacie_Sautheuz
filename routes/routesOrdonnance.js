// création du routeur Express pour ce module
const express = require('express');
const routeur = express.Router();
const ctrlOrdonnance = require('../controllers/ordonnanceController.js');

routeur.get('/ordonnance', ctrlOrdonnance.controlOrdo.afficherOrdonnance)

module.exports = routeur;