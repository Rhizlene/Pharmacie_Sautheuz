// inclure les dépendances et middlewares
const routeur = require('./routes/pharmaRoute.js');
const express = require('express');
const ejs = require('ejs');
const mysql = require('mysql');
let iniparser = require('iniparser');

// activer les dépendances pour Express et EJS
let app = express()
app.set('view engine', 'ejs')
app.use(express.static('views'))
app.use(express.static('public'))

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

// activer les dépendances pour la bdd
let configDB = iniparser.parseSync('./DB.ini')
let mysqlconnexion = mysql.createConnection({
    host:configDB['dev']['host'],
    user:configDB['dev']['user'],
    password:configDB['dev']['password'],
    database:configDB['dev']['database']
})

mysqlconnexion.connect((err) => {
    if (!err) console.log('BDD connectée.')
    else console.log('BDD connexion échouée \n Erreur: '+JSON.stringify(err))
})

// activer le middleware et lancer l'application sur le port 3000
app.use(express.json())
app.listen(3000, () => console.log('le serveur Pharmacie sautheuz est prêt.'))

// utiliser les routeurs
app.get('/', (req, res) => {
    res.send('Pharmacie Sautheuz est actif');
});

//Afficher page accueil
app.get('/accueil', function(req, res) {
    res.render('accueil');
});

// Afficher la page d'inscription
app.get('/inscription', function(req, res) {
    res.render('inscription');
});

app.get('/intranet/accueil', function(req, res) {
    res.render('intranetAccueil');
});

app.get('/intranet/medecin', function(req, res) {
    mysqlconnexion.query("SELECT * FROM medecin, diplome WHERE med_DipId=dip_ID", (err, lignes, champs) => {
        if (!err) {
            console.log(lignes);
            res.render("intranetMedecin", {medecin : lignes});
        }
    });
});

app.get('/intranet/ordonnance', function(req, res) {
    mysqlconnexion.query("SELECT * FROM ordonnance, patient, medecin, diplome, posologie, medicament, pathologie WHERE med_DipId=dip_ID and ordo_PatId=pat_Id and ordo_MedId=med_Id and ordo_PathId=path_Id and ordo_PosId=pos_Id and med_DipId=dip_Id and pos_MedicId=medic_Id", (err, lignes, champs) => {
        if (!err) {
            console.log(lignes);
            res.render("intranetOrdonnance", {ordonnance : lignes});
        }
    });
});

app.get('/intranet/patient', function(req, res) {
    mysqlconnexion.query("SELECT * FROM patient, mutuelle WHERE pat_MutId=mut_Id", (err, lignes, champs) => {
        if (!err) {
            console.log(lignes);
            res.render("intranetPatient", {patient : lignes});
        }
    });
});

app.get('/intranet/mutuelle', function(req, res) {
    mysqlconnexion.query("SELECT * FROM mutuelle", (err, lignes, champs) => {
        if (!err) {
            console.log(lignes);
            res.render("intranetMutuelle", {mutuelle : lignes});
        }
    });
});

app.get('/intranet/pathologie', function(req, res) {
    mysqlconnexion.query("SELECT * FROM pathologie", (err, lignes, champs) => {
        if (!err) {
            console.log(lignes);
            res.render("intranetPathologie", {pathologie : lignes});
        }
    });
});

app.get('/intranet/medicament', function(req, res) {
    mysqlconnexion.query("SELECT * FROM medicament", (err, lignes, champs) => {
        if (!err) {
            console.log(lignes);
            res.render("intranetMedicament", {medicament : lignes});
        }
    });
});