const modelMut = require('../models/modelMutuelle')

const controlMut = {

    async afficherMutuelle(req, res) {

        try {
            
            const data = await modelMut.Mutuelle.afficherMutuelle()

            if (data) {
                res.render('intranetMutuelle', {dataMutuelle : data})

            }else {
                res.render('intranetMutuelle', {dataMutuelle : {} })
            } 
        } catch (error) {
            console.log(error)
        }
    }
}


module.exports = {
    controlMut
}