// inclure les dépendances et middlewares
const mysql = require('mysql2');
let iniparser = require('iniparser');

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

const Medicament = {

    async afficherMedicament() {

        return new Promise((reussi, echec) => {

            mysqlconnexion.query("SELECT * FROM pathologie", (err, lignes, champs) => {

                if (err) {

                    return echec(lignes)

                }

                return reussi(lignes)

            })
        })
    },

    async formulaireMedicament() {

    },

    async ajouterMedicament() {

    },

    async modifierMedicament() {

    },

    async supprimerMedicament() {

    },

    async rechercherMedicament() {

    }
}

module.exports = {
    Medicament
}