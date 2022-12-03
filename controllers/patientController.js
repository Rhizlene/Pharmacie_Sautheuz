const modelPat = require('../models/modelPatient')

const controlPat = {

    async afficherPatient(req, res) {

        try {
            
            const data = await modelPat.Patient.afficherPatient()

            if (data) {
                res.render('intranetPatient', {dataPatient : data})

            }else {
                res.render('intranetPatient', {dataPatient : {} })
            } 
        } catch (error) {
            console.log(error)
        }
    },

    async formulairePatient(req, res) {

        try {
            
            const data = await modelPat.Patient.formulairePatient()

            if (data) {
                res.render('formulairePatient', {formPatient : data})

            }else {
                res.render('formulairePatient', {formPatient : {} })
            } 
        } catch (error) {
            console.log(error)
        }
    }
}


module.exports = {
    controlPat
}