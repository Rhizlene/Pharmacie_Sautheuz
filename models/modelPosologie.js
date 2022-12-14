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

const Posologie = {

    async afficherUnePosologiePourUneOrdonnance(req) {

        let ordoId = req.params.id

        let requete = "SELECT * FROM ordonnance, posologie, medicament WHERE pos_OrdoId = ordo_Id AND pos_MedicId = medic_Id AND pos_OrdoId = ?"

        return new Promise((reussi, echec) => {

            mysqlconnexion.query(requete, [ordoId], (err, lignes, champs) => {

                if (err) {

                    return echec(err)

                }

                return reussi(lignes)

            })
        })
    },

    async ajouterPosologie(req) {

        let ordoId = req.body.ordoId
        let posMedicQte = req.body.posMedicQte
        let posDuree = req.body.posDuree
        let posMedicId = req.body.posMedicId

        let requete = "INSERT INTO posologie (pos_OrdoId, pos_MedicQte, pos_Duree, pos_MedicId) VALUES (?, ?, ?, ?)"

        return new Promise((reussi, echec) => {

            mysqlconnexion.query(requete, [ordoId, posMedicQte, posDuree, posMedicId], (err, lignes, champs) => {

                if (err) {

                    return echec(err)

                }

                return reussi(lignes)

            })
        })
    }
}

module.exports = {
    Posologie
}