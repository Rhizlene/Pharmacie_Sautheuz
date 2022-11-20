
const modele = require('../models/modele');

const pharmacie_accueil = (req, res) => {
    modele.find()
}

const pharmacie_inscription = (req, res) => {
    modele.find()
}

const pharmacie_intranetAccueil = (req, res) => {
    modele.find()
}

const pharmacie_intranetMedecin = (req, res) => {
    modele.find()
}

const pharmacie_intranetOrdonnance = (req, res) => {
    modele.find()
}

const pharmacie_intranetPatient = (req, res) => {
    modele.find()
}

const pharmacie_intranetMutuelle = (req, res) => {
    modele.find()
}

const pharmacie_intranetPathologie = (req, res) => {
    modele.find()
}

const pharmacie_intranetMedicament = (req, res) => {
    modele.find()
}

module.exports = {
    pharmacie_accueil,
    pharmacie_inscription,
    pharmacie_intranetAccueil,
    pharmacie_intranetMedecin,
    pharmacie_intranetOrdonnance,
    pharmacie_intranetPatient,
    pharmacie_intranetMutuelle,
    pharmacie_intranetPathologie,
    pharmacie_intranetMedicament
}