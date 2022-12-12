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

        let requete = "SELECT * FROM ordonnance, patient, medecin, diplome, pathologie WHERE ordo_PatId=pat_Id AND ordo_MedId = med_Id AND ordo_PathId = path_Id AND med_DipId = dip_Id"

        return new Promise((reussi, echec) => {

            mysqlconnexion.query(requete, (err, lignes, champs) => {

                if (err) {

                    return echec(lignes)

                }

                return reussi(lignes)

            })
        })
    },

    async formulaireOrdonnance() {

        
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