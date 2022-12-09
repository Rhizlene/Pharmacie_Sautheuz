// création du routeur Express pour ce module
const express = require('express');
const routeur = express.Router();
const ctrlMutuelle = require('../controllers/mutuelleController.js');

routeur.get('/', ctrlMutuelle.controlMut.afficherMutuelle)
routeur.get('/formulaire',function(req, res) {
    res.render('formulaireMutuelle');
});

module.exports = routeur;