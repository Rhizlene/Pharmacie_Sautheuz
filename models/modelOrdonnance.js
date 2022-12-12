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

const Ordonnance = {

    async afficherOrdonnance() {

        return new Promise((reussi, echec) => {

            mysqlconnexion.query("SELECT * FROM ordonnance, patient, medecin, diplome, posologie, medicament, pathologie WHERE med_DipId=dip_ID and ordo_PatId=pat_Id and ordo_MedId=med_Id and ordo_PathId=path_Id and ordo_PosId=pos_Id and med_DipId=dip_Id and pos_MedicId=medic_Id", (err, lignes, champs) => {

                if (err) {

                    return echec(lignes)

                }

                return reussi(lignes)

            })
        })
    },

    async formulaireOrdonnance() {

        return new Promise ((reussi, echec) => {

            mysqlconnexion.query("SELECT pat_Nom, pat_Prenom, pat_Naissance FROM patient", (err, lignes, champs) => {

                if (err) {
                    
                    return echec(lignes)

                } else {

                    return reussi(lignes)

                }

            });
            mysqlconnexion.query("SELECT med_Nom, med_Prenom, med_Num FROM medecin", (err, lignes, champs) => {

                if (err) {
                    
                    return echec(lignes)

                } else {

                    return reussi(lignes)

                }

            });
            mysqlconnexion.query("SELECT dip_Nom FROM diplome", (err, lignes, champs) => {

                if (err) {
                    
                    return echec(lignes)

                } else {

                    return reussi(lignes)

                }

            });
            mysqlconnexion.query("SELECT path_Nom FROM pathologie", (err, lignes, champs) => {

                if (err) {
                    
                    return echec(lignes)

                } else {

                    return reussi(lignes)

                }

            });
            mysqlconnexion.query("SELECT medic_Nom, medic_Type FROM medicament", (err, lignes, champs) => {

                if (err) {
                    
                    return echec(lignes)

                } else {

                    return reussi(lignes)

                }

            });
        })
    },

    async ajouterOrdonnance() {

    },

    async modifierOrdonnance() {

    },

    async supprimerOrdonnance(req) {
        let ordoId = req.params.id
    
        let requete = "DELETE FROM ordonnance WHERE ordo_Id = ?"
    
        return new Promise((reussi, echec)=>{
    
            mysqlconnexion.query(requete, [ordoId], (err, lignes, champs) => {
    
                if(err){
    
                    return echec(err)
    
                }
    
                return reussi(lignes)
    
            })
        })
    },

    async rechercherOrdonnance() {

    }
}

module.exports = {
    Ordonnance
}