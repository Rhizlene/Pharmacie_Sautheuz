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

                    return echec(lignes)

                }

                return reussi(lignes)

            })
        })
    },

    async formulaireMedecin() {

        return new Promise ((reussi, echec) => {

            mysqlconnexion.query("SELECT * FROM diplome", (err, lignes, champs) => {

                if (err) {
                    
                    return echec(lignes)

                } else {

                    return reussi(lignes)

                }

            });
        })
    },

    async ajouterMedecin() {

        let medNom = req.body.medNom
        let medPrenom = req.body.medPrenom
        let medDiplome = req.body.chooseDip
        let medNum = req.body.medNum

        mysqlconnexion.query("SELECT dip_Id FROM Diplome WHERE dip_Nom='" + medDiplome + "';", (err, lignes, champs) => {
            if (!err) {
                /* stocker le resultat de la requete */
            }
        });

        return new Promise((reussi, echec) => {

            mysqlconnexion.query("INSERT INTO medecin (med_Nom, med_Prenom, med_DipId, med_Num) VALUES ('" + medNom + "', '" + medPrenom + "', " + /* resultat de la requete */ + ", '" + medNum + "')", (err, lignes, champs) => {

                if (err) {

                    return echec(lignes)

                }

                return reussi(lignes)

            })
        })
    },

    async modifierMedecin(){

    },

    async supprimerMedecin() {

    },

    async rechercherMedecin () {
        
    }
}

module.exports = {
    Medecin
}