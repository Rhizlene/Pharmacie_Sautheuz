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

const Mutuelle = {

    async afficherMutuelle() {

        return new Promise((reussi, echec) => {

            mysqlconnexion.query("SELECT * FROM mutuelle", (err, lignes, champs) => {

                if (err) {

                    return echec(lignes)

                }

                return reussi(lignes)

            })
        })
    },

    async afficherUneMutuelle(req) {

        let mutId = req.params.id

        let requete = "select * from mutuelle where mut_Id = ?"

        return new Promise((reussi, echec) => {
            mysqlconnexion.query(requete, [mutId] ,(err, lignes)=> {

                if (err) {
                    return echec(err)
                }

                return reussi(lignes)
            })
        })
    },

    async ajouterMutuelle(req) {

        let mutNom = req.body.mutNom
        let mutTaux = req.body.mutTaux

        let requete = "INSERT INTO mutuelle (mut_Nom, mut_Taux) VALUES (?, ?)"

        return new Promise((reussi, echec) => {

            mysqlconnexion.query(requete, [mutNom, mutTaux] ,(err, lignes, champs) => {

                if (err) {

                    return echec(err)

                }

                return reussi(lignes)

            })
        })
    },

    async modifierMutuelle(req) {

        let mutId = req.params.id
        let mutNom = req.body.mutNom
        let mutTaux = req.body.mutTaux

        let requete = "UPDATE mutuelle SET mut_Nom = ?, mut_Taux = ? WHERE mut_Id = ?"

        return new Promise((reussi, echec) => {

            mysqlconnexion.query(requete, [mutNom, mutTaux, mutId], (err, lignes, champs) => {

                if (err) {
                    return echec(err)
                }

                return reussi(lignes)
            })
        })
    },

    async supprimerMutuelle(req) {
        let mutId = req.params.id
    
            let requete = "DELETE FROM mutuelle WHERE mut_Id = ?"
    
            return new Promise((reussi, echec)=>{
    
                mysqlconnexion.query(requete, [mutId], (err, lignes, champs) => {
    
                    if(err){
    
                        return echec(err)
    
                    }
    
                    return reussi(lignes)
    
                })
            })
    },

    async rechercherMutuelle() {

    }
}

module.exports = {
    Mutuelle
}