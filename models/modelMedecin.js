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

const Medecin = {

    async afficherMedecin() {

        return new Promise((reussi, echec) => {

            mysqlconnexion.query("SELECT * FROM medecin, diplome WHERE med_DipId=dip_ID", (err, lignes, champs) => {

                if (err) {

                    return echec(err)

                }

                return reussi(lignes)

            })
        })
    },

    async ajouterMedecin(req) {

        let medNom = req.body.medNom
        let medPrenom = req.body.medPrenom
        let medDiplome = req.body.medDiplome
        let medNum = req.body.medNum

        let requete = "INSERT INTO medecin (med_Nom, med_Prenom, med_DipId, med_Num) VALUES ( ?, ? , ? , ?)"

        return new Promise((reussi, echec) => {

            mysqlconnexion.query(requete, [medNom, medPrenom, medDiplome, medNum] ,(err, lignes, champs) => {

                if (err) {

                    return echec(err)

                }

                return reussi(lignes)

            })
        })
    },

    async afficherUnMedecin(req) {
        let medId = req.params.id

        let requete = "select * from medecin, diplome where med_dipId = dip_Id and med_Id = ?"

        return new Promise((reussi, echec) => {
            mysqlconnexion.query(requete, [medId] ,(err, lignes)=> {

                if (err) {
                    return echec(err)
                }

                return reussi(lignes)
            })
        })
    },

    async modifierMedecin(req){

        let medId = req.params.id
        let medNom = req.body.medNom
        let medPrenom = req.body.medPrenom
        let medDiplome = req.body.medDiplome
        let medNum = req.body.medNum

        let requete = "UPDATE medecin SET med_Nom = ?, med_Prenom = ?, med_DipId = ?, med_Num = ? WHERE med_Id = ?"

        return new Promise((reussi, echec) => {

            mysqlconnexion.query(requete, [medNom, medPrenom, medDiplome, medNum, medId], (err, lignes, champs) => {

                if (err) {
                    return echec(err)
                }

                return reussi(lignes)
            })
        })
    },

    async supprimerMedecin(req) {

        let medId = req.params.id

        let requete = "DELETE FROM medecin WHERE med_Id = ?"

        return new Promise((reussi, echec)=>{

            mysqlconnexion.query(requete, [medId], (err, lignes, champs) => {

                if(err){

                    return echec(err)

                }

                return reussi(lignes)

            })
        })
    },

    async rechercherMedecin () {
        
    }
}

module.exports = {
    Medecin
}