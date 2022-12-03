const modelMedic = require('../models/modelMedicament')

const controlMedic = {

    async afficherMedicament(req, res) {

        try {
            
            const data = await modelMedic.Medicament.afficherMedicament()

            if (data) {
                res.render('medicament', {dataMedicament : data})

            }else {
                res.render('medicament', {dataMedicament : {} })
            } 
        } catch (error) {
            console.log(error)
        }
    }
}


module.exports = {
    controlMedic
}