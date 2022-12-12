const modelPos = require('../models/modelPosologie')

const controlPos = {

    async afficherPosologie(req, res) {

        try {
            
            const dataPos = await modelPos.Posologie.afficherUnePosologiePourUneOrdonnance(req)

            if (dataPos) {
                res.render('intranetPosologie', {dataPosologie : dataPos})

            }else {
                res.render('intranetPosologie', {dataPosologie : {}})
            } 
        } catch (error) {
            console.log(error)
        }
    }
}


module.exports = {
    controlPos
}