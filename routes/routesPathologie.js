// création du routeur Express pour ce module
const express = require('express');
const routeur = express.Router();
const ctrlPathologie = require('../controllers/pathologieController.js');

routeur.get('/', ctrlPathologie.controlPath.afficherPathologie)
<<<<<<< HEAD
routeur.get('/formulaire', ctrlPathologie.controlPath.formulairePathologie)
routeur.post('/formulaire', ctrlPathologie.controlPath.ajouterPathologie)
routeur.get('/modifier/:id', ctrlPathologie.controlPath.afficherUnePathologie)
routeur.post('/modifier/:id', ctrlPathologie.controlPath.modifierPathologie)
=======
routeur.get('/formulaire',function(req, res) {
    res.render('formulairePathologie');
});
>>>>>>> e785808c813231745303d5264a45fbbde25e1988

module.exports = routeur;