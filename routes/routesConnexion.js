// création du routeur Express pour ce module
const express = require('express');
const routeur = express.Router();
const ctrlConnexion = require('../controllers/connexionController.js');

routeur.post('/', ctrlConnexion.controlConnPhar.Connexion)

module.exports = routeur;