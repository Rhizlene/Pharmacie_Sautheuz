// création du routeur Express pour ce module
const express = require('express');
const routeur = express.Router();
const ctrlPosologie = require('../controllers/posologieController.js');

routeur.get('/:id', ctrlPosologie.controlPos.afficherPosologie)

module.exports = routeur;