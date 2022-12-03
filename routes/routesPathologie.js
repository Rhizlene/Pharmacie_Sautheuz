// création du routeur Express pour ce module
const express = require('express');
const routeur = express.Router();
const ctrlPathologie = require('../controllers/pathologieController.js');

routeur.get('/pathologie', ctrlPathologie.controlPath.afficherPathologie)

module.exports = routeur;