// inclure les dépendances et middlewares
const express = require('express');
const ejs = require('ejs');
const mysql = require('mysql2');
let iniparser = require('iniparser');
const bodyparser = require('body-parser')
const { urlencoded } = require('body-parser')

// REAL 

const medecinRoutes = require('./routes/routesMedecin.js');



// activer les dépendances pour Express et EJS
let app = express()
app.set('view engine', 'ejs')
app.use(express.static('views'))
app.use(express.static('public'))

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

// activer le middleware et lancer l'application sur le port 3000
app.use(express.json());
app.use(express.urlencoded());
app.listen(3000, () => console.log('le serveur Pharmacie sautheuz est prêt.'))

// utiliser les routeurs
app.get('/', (req, res) => {
    res.send('Pharmacie Sautheuz est actif');
});

//Afficher page accueil
app.get('/home', function(req, res) {
    res.render('home');
});

// Afficher la page d'inscription
app.get('/inscription', function(req, res) {
    res.render('inscription');
});

app.get('/accueil', function(req, res) {
    res.render('intranetAccueil');
});

// REAL 

app.use('/medecin', medecinRoutes);