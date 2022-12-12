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

const Patient = {

    async afficherPatient() {

        return new Promise((reussi, echec) => {

            mysqlconnexion.query("SELECT * FROM patient, mutuelle WHERE pat_MutId=mut_Id", (err, lignes, champs) => {

                if (err) {

                    return echec(lignes)

                }

                return reussi(lignes)

            })
        })
    },

    async formulairePatient() {

        return new Promise ((reussi, echec) => {

            mysqlconnexion.query("SELECT * FROM mutuelle", (err, lignes, champs) => {

                if (err) {
                    
                    return echec(lignes)

                } else {

                    return reussi(lignes)

                }

            });
        })
    },

    async ajouterPatient(req) {

        let patNom = req.body.patNom
        let patPrenom = req.body.patPrenom
        let patNaissance = req.body.patNaissance
        let patNumSecu = req.body.patNumSecu
        let patNumMut = req.body.patNumMut
        let patMutuelle = req.body.patMutuelle

        let requete = "INSERT INTO patient (pat_Nom, pat_Prenom, pat_Naissance, pat_NumSecu, pat_NumMut, pat_MutId) VALUES ( ?, ?, ?, ?, ?, ?)"

        return new Promise((reussi, echec) => {

            mysqlconnexion.query(requete, [patNom, patPrenom, patNaissance, patNumSecu, patNumMut, patMutuelle] ,(err, lignes, champs) => {

                if (err) {

                    return echec(err)

                }

                return reussi(lignes)

            })
        })
    },

    async modifierPatient(req) {

        let patId = req.params.id
        let patNom = req.body.patNom
        let patPrenom = req.body.patPrenom
        let patNaissance = req.body.patNaissance
        let patNumSecu = req.body.patNumSecu
        let patNumMut = req.body.patNumMut
        let patMutuelle = req.body.patMutuelle

        let requete = "UPDATE patient SET pat_Nom = ?, pat_Prenom = ?, pat_Naissance = ?, pat_NumSecu = ?, pat_NumMut = ?, pat_MutId = ? WHERE med_Id = ?"

        return new Promise((reussi, echec) => {

            mysqlconnexion.query(requete, [patNom, patPrenom, patNaissance, patNumSecu, patNumMut, patMutuelle, patId], (err, lignes, champs) => {

                if (err) {
                    return echec(err)
                }

                return reussi(lignes)
            })
        })
    },

    async afficherLesMutuelles() {

        let requete = "SELECT * FROM mutuelle"

        return new Promise((reussi, echec) => {
            mysqlconnexion.query(requete,(err, lignes)=> {

                if (err) {
                    return echec(err)
                }

                return reussi(lignes)
            })
        })
    },

    async afficherUnPatient(req) {
        let patId = req.params.id

        let requete = "select * from patient where pat_Id = ?"

        return new Promise((reussi, echec) => {
            mysqlconnexion.query(requete, [patId] ,(err, lignes)=> {

                if (err) {
                    return echec(err)
                }

                return reussi(lignes)
            })
        })
    },

    async supprimerPatient(req) {
        let patId = req.params.id
    
        let requete = "DELETE FROM patient WHERE pat_Id = ?"
    
        return new Promise((reussi, echec)=>{
    
            mysqlconnexion.query(requete, [patId], (err, lignes, champs) => {
    
                if(err){
    
                    return echec(err)
    
                }
    
                return reussi(lignes)
    
            })
        })
    },

    async rechercherPatient() {

    }
}

module.exports = {
    Patient
}