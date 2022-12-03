const modelOrdo = require('../models/modelOrdonnance')

const controlOrdo = {

    async afficherOrdonnance(req, res) {

        try {
            
            const data = await modelOrdo.Ordonnance.afficherOrdonnance()

            if (data) {
                res.render('ordonnance', {dataOrdonnance : data})

            }else {
                res.render('ordonnance', {dataOrdonnance : {} })
            } 
        } catch (error) {
            console.log(error)
        }
    }
}


module.exports = {
    controlOrdo
}