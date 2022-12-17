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

            mysqlconnexion.query("SELECT * FROM medicament", (err, lignes, champs) => {

                if (err) {

                    return echec(lignes)

                }

                return reussi(lignes)

            })
        })
    },

    async ajouterMedicament(req) {

        let medicNom = req.body.medicNom
        let medicType = req.body.medicType
        let medicQteStock = req.body.medicQteStock

        let requete = "INSERT INTO medicament (medic_Nom, medic_Type, medic_QteStock) VALUES ( ?, ?, ?)"

        return new Promise((reussi, echec) => {

            mysqlconnexion.query(requete, [medicNom, medicType, medicQteStock] ,(err, lignes, champs) => {

                if (err) {

                    return echec(err)

                }

                return reussi(lignes)

            })
        })
    },

    async afficherUnMedicament(req) {

        let medicId = req.params.id

        let requete = "select * from medicament where medic_Id = ?"

        return new Promise((reussi, echec) => {
            mysqlconnexion.query(requete, [medicId] ,(err, lignes)=> {

                if (err) {
                    return echec(err)
                }

                return reussi(lignes)
            })
        })
    },

    async afficherMedicTypeDISTINCT() {

        let requete = "select DISTINCT medic_Type from medicament"

        return new Promise((reussi, echec) => {
            mysqlconnexion.query(requete, (err, lignes)=> {

                if (err) {
                    return echec(err)
                }

                return reussi(lignes)
            })
        })
    },

    async afficherMedicNomDISTINCT() {

        let requete = "select DISTINCT medic_Nom from medicament"

        return new Promise((reussi, echec) => {
            mysqlconnexion.query(requete, (err, lignes)=> {

                if (err) {
                    return echec(err)
                }

                return reussi(lignes)
            })
        })
    },

    async modifierMedicament(req) {

        let medicId = req.params.id
        let medicNom = req.body.medicNom
        let medicType = req.body.medicType
        let medicQteStock = req.body.medicQteStock

        let requete = "UPDATE medicament SET medic_Nom = ?, medic_type = ?, medic_QteStock = ? WHERE medic_Id = ?"

        return new Promise((reussi, echec) => {

            mysqlconnexion.query(requete, [medicNom, medicType, medicQteStock, medicId], (err, lignes, champs) => {

                if (err) {
                    return echec(err)
                }

                return reussi(lignes)
            })
        })
    },

    async supprimerMedicament(req) {
        let medicId = req.params.id
    
            let requete = "DELETE FROM medicament WHERE medic_Id = ?"
    
            return new Promise((reussi, echec)=>{
    
                mysqlconnexion.query(requete, [medicId], (err, lignes, champs) => {
    
                    if(err){
    
                        return echec(err)
    
                    }
    
                    return reussi(lignes)
    
                })
            })
    },

    async rechercherMedicament(req) {
        let medicNom = req.body.medicNom
        
        let requete = "SELECT * FROM medicament where medic_Nom like ?"

        return new Promise((reussi, echec) => {

            mysqlconnexion.query(requete, [medicNom], (err, lignes, champs) => {

                if (err) {
                    return echec(err)
                }

                return reussi(lignes)
            })
        })
        
    
    }
}

module.exports = {
    Medicament
}