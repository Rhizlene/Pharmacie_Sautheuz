const routeur = require('./routes/pharmaRoute.js');
const express = require('express');
const ejs = require('ejs');

// activer les dépendances pour Express et EJS
let app = express()
app.set('view engine', 'ejs')
app.use(express.static('views'))
app.use(express.static('public'))

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

// activer le middleware et lancer l'application sur le port 3000
app.use(express.json())
app.listen(3000, () => console.log('le serveur Pharmacie sautheuz est prêt.'))

// utiliser les routeurs
app.get('/', (req, res) => {
    res.send('Pharmacie Sautheuz est actif')
})

//Afficher page accueil
.get('/accueil', function(req, res) {
    res.render('accueil')
    })
