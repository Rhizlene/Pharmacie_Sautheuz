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

const Diplome = {

    async afficherDiplome() {

        return new Promise((reussi, echec) => {

            mysqlconnexion.query("SELECT * FROM diplome", (err, lignes, champs) => {

                if (err) {

                    return echec(lignes)

                }

                return reussi(lignes)

            })
        })
    },

    async afficherUnDiplome(req) {

        let dipId = req.params.id

        let requete = "select * from diplome where dip_Id = ?"

        return new Promise((reussi, echec) => {
            mysqlconnexion.query(requete, [dipId] ,(err, lignes)=> {

                if (err) {
                    return echec(err)
                }

                return reussi(lignes)
            })
        })
    },

    async ajouterDiplome(req) {

        let dipNom = req.body.dipNom

        let requete = "INSERT INTO diplome (dip_Nom) VALUES (?)"

        return new Promise((reussi, echec) => {

            mysqlconnexion.query(requete, [dipNom] ,(err, lignes, champs) => {

                if (err) {

                    return echec(err)

                }

                return reussi(lignes)

            })
        })
    },

    async modifierDiplome(req){

        let dipId = req.params.id
        let dipNom = req.body.dipNom

        let requete = "UPDATE diplome SET dip_Nom = ? WHERE dip_Id = ?"

        return new Promise((reussi, echec) => {

            mysqlconnexion.query(requete, [dipNom, dipId], (err, lignes, champs) => {

                if (err) {
                    return echec(err)
                }

                return reussi(lignes)
            })
        })
    },

    async supprimerDiplome() {

    },

    async rechercherDiplome() {
        
    }
}

module.exports = {
    Diplome
}