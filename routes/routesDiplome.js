// création du routeur Express pour ce module
const express = require('express');
const routeur = express.Router();
const ctrlDiplome = require('../controllers/diplomeController.js');

routeur.get('/', ctrlDiplome.controlDip.afficherDiplome)
routeur.get('/formulaire',function(req, res) {
    res.render('formulaireDiplome');
});

module.exports = routeur;