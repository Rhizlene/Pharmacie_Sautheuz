// création du routeur Express pour ce module
const express = require('express');
const routeur = express.Router();
const ctrlOrdonnance = require('../controllers/ordonnanceController.js');

routeur.get('/', ctrlOrdonnance.controlOrdo.afficherOrdonnance)

module.exports = routeur;