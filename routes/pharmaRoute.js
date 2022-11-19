// création du routeur Express pour ce module
const express = require('express');
const routeur = express.Router();
const pharmaControle = require('../controllers/pharmaControllers.js');

// voir tous les messages
routeur.get('/accueil', pharmaControle.pharmacie_accueil)
module.exports = routeur;