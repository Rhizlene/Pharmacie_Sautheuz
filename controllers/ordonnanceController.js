const modelOrdo = require('../models/modelOrdonnance')

const controlOrdo = {

    async afficherOrdonnance(req, res) {

        try {
            
            const data = await modelOrdo.Ordonnance.afficherOrdonnance()

            if (data) {
                res.render('intranetOrdonnance', {dataOrdonnance : data})

            }else {
                res.render('intranetOrdonnance', {dataOrdonnance : {} })
            } 
        } catch (error) {
            console.log(error)
        }
    }
}


module.exports = {
    controlOrdo
}