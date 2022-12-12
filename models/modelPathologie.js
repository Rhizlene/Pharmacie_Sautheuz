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

const Pathologie = {

    async afficherPathologie() {

        return new Promise((reussi, echec) => {

            mysqlconnexion.query("SELECT * FROM pathologie", (err, lignes, champs) => {

                if (err) {

                    return echec(lignes)

                }

                return reussi(lignes)

            })
        })
    },

    async afficherUnePathologie(req) {

        let pathId = req.params.id

        let requete = "select * from pathologie where path_Id = ?"

        return new Promise((reussi, echec) => {
            mysqlconnexion.query(requete, [pathId] ,(err, lignes)=> {

                if (err) {
                    return echec(err)
                }

                return reussi(lignes)
            })
        })
    },

    async ajouterPathologie(req) {

        let pathNom = req.body.pathNom

        let requete = "INSERT INTO pathologie (path_Nom) VALUES (?)"

        return new Promise((reussi, echec) => {

            mysqlconnexion.query(requete, [pathNom] ,(err, lignes, champs) => {

                if (err) {

                    return echec(err)

                }

                return reussi(lignes)

            })
        })
    },

    async modifierPathologie(req) {

        let pathId = req.params.id
        let pathNom = req.body.pathNom

        let requete = "UPDATE pathologie SET path_Nom = ? WHERE path_Id = ?"

        return new Promise((reussi, echec) => {

            mysqlconnexion.query(requete, [pathNom, pathId], (err, lignes, champs) => {

                if (err) {
                    return echec(err)
                }

                return reussi(lignes)
            })
        })
    },

    async supprimerPathologie(req) {
        let pathId = req.params.id
    
        let requete = "DELETE FROM pathologie WHERE path_Id = ?"
    
        return new Promise((reussi, echec)=>{
    
            mysqlconnexion.query(requete, [pathId], (err, lignes, champs) => {
    
                if(err){
    
                    return echec(err)
    
                }
    
                return reussi(lignes)
    
            })
        })
    },

    async rechercherPathologie() {

    }
}

module.exports = {
    Pathologie
}