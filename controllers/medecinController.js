const modelMed = require('../models/modelMedecin');

const controlMed = {

    async afficherMedecin(req, res) {

        try {
            
            const data = await modelMed.Medecin.afficherMedecin()

            if (data) {
                res.render('/medecin', {dataMedecin : data})

            }else {
                res.render('/medecin', {dataMedecin : {} })
            } 
        } catch (error) {
            console.log(error)
        }
    },

    async formulaireMedecin(req, res) {

        try {
            
            const data = await modelMed.Medecin.formulaireMedecin()

            if (data) {
                res.render('/formulaire/medecin', {formMedecin : data})

            }else {
                res.render('/formulaire/medecin', {formMedecin : {} })
            } 
        } catch (error) {
            console.log(error)
        }
    }
}


module.exports = {
    controlMed
}