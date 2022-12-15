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

    async afficherPosologie(req) {

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
    },

    async afficherUnePosologie(req) {

        let posId = req.params.id

        let requete = "select * from posologie where pos_Id = ?"

        return new Promise((reussi, echec) => {
            mysqlconnexion.query(requete, [posId] ,(err, lignes)=> {

                if (err) {
                    return echec(err)
                }

                return reussi(lignes)
            })
        })
    },

    async modifierPosologie(req) {

        let posId = req.params.id
        let posOrdoId = req.body.posOrdoId
        let posMedicQte = req.body.posMedicQte
        let posDuree = req.body.posDuree
        let posMedicId = req.body.posMedicId

        let requete = "UPDATE posologie SET pos_OrdoId = ?, pos_MedicQte = ?, pos_Duree = ?, pos_MedicId = ? WHERE pos_Id = ?"

        return new Promise((reussi, echec) => {

            mysqlconnexion.query(requete, [posOrdoId, posMedicQte, posDuree, posMedicId, posId], (err, lignes, champs) => {

                if (err) {
                    return echec(err)
                }

                return reussi(lignes)
            })
        })
    },

    async supprimerPosologie(req) {

        let posId = req.params.id
    
        let requete = "DELETE FROM posologie WHERE pos_Id = ?"
    
        return new Promise((reussi, echec)=>{
    
            mysqlconnexion.query(requete, [posId], (err, lignes, champs) => {
    
                if(err){
    
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