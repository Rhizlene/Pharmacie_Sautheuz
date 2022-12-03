const modelPat = require('../models/modelPatient')

const controlPat = {

    async afficherPatient(req, res) {

        try {
            
            const data = await modelPat.Patient.afficherPatient()

            if (data) {
                res.render('patient', {dataPatient : data})

            }else {
                res.render('patient', {dataPatient : {} })
            } 
        } catch (error) {
            console.log(error)
        }
    },

    async formulairePatient(req, res) {

        try {
            
            const data = await modelPat.Patient.formulairePatient()

            if (data) {
                res.render('formulaire/patient', {formPatient : data})

            }else {
                res.render('formulaire/patient', {formPatient : {} })
            } 
        } catch (error) {
            console.log(error)
        }
    }
}


module.exports = {
    controlPat
}