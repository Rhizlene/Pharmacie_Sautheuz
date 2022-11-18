const routeur = require('./routes/pharmaRoute.js');
const express = require('express');
const ejs = require('ejs');

// activer les dépendances pour Express et EJS
let app = express()
app.set('view engine', 'ejs')
app.use(express.static('views'))
app.use(express.static('public'))
app.use(express.json());
app.use('/Pharmacie', routeur);

// utiliser les routeurs
app.get('/', (req, res) => {
    res.send('Pharmacie Sautheuz est actif')
})

// page accueil
routeur.get('/accueil', (req, res) => {
   
})
