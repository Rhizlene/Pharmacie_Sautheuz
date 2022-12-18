// inclure les dépendances et middlewares
const mysql = require('mysql2');
let iniparser = require('iniparser');
const bodyparser = require('body-parser')
const { urlencoded } = require('body-parser')

// activer les dépendances pour la bdd
let configDB = iniparser.parseSync('./DB.ini')
let mysqlconnexion = mysql.createConnection({
    host:configDB['dev']['host'],
    user:configDB['dev']['user'],
    password:configDB['dev']['password'],
    database:configDB['dev']['database']
})

mysqlconnexion.connect((err) => {
    if (!err) console.log('BDD connectée. =====================================================================================')
    else console.log('BDD connexion échouée \n Erreur: '+JSON.stringify(err))
})

const ConnexionPharmacien = {

    async Connexion(req) {

        let pharIdentifiant = req.body.pharIdentifiant
        let pharMdp = req.body.pharMdp

        let requete = "SELECT COUNT(*) FROM pharmacien WHERE phar_Identifiant = ? AND phar_Mdp = ?"

        return new Promise((reussi, echec) => {

            mysqlconnexion.query(requete, [pharIdentifiant, pharMdp] , (err, lignes, champs) => {

                if (err) {

                    return echec(err)

                }

                return reussi(lignes)

            })
        })
    }
}

module.exports = {
    ConnexionPharmacien
}