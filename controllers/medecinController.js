const modelMed = require('../models/modelMedecin');

const controlMed = {

    async afficherMedecin(req, res) {

        try {
            
            const data = await modelMed.Medecin.afficherMedecin()

            if (data) {
                res.render('intranetMedecin', {dataMedecin : data})

            }else {
                res.render('intranetMedecin', {dataMedecin : {} })
            } 
        } catch (error) {
            console.log(error)
        }
    },

    async formulaireMedecin(req, res) {

        try {
            
            const data = await modelMed.Medecin.formulaireMedecin()

            if (data) {
                res.render('formulaireMedecin', {formMedecin : data})

            }else {
                res.render('formulaireMedecin', {formMedecin : {} })
            } 
        } catch (error) {
            console.log(error)
        }
    }
}


module.exports = {
    controlMed
}