// création du routeur Express pour ce module
const express = require('express');
const routeur = express.Router();
const pharmaControle = require('../controllers/pharmaControllers.js');

routeur.get('/accueil', pharmaControle.pharmacie_accueil)
module.exports = routeur;