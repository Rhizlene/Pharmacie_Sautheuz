// création du routeur Express pour ce module
const express = require('express');
const routeur = express.Router();
const ctrlPathologie = require('../controllers/pathologieController.js');

routeur.get('/', ctrlPathologie.controlPath.afficherPathologie)
routeur.get('/formulaire',function(req, res) {
    res.render('formulairePathologie');
});

module.exports = routeur;