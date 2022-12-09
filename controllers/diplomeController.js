const modelDip = require('../models/modelDiplome');

const controlDip = {

    async afficherDiplome(req, res) {

        try {
            
            const data = await modelDip.Diplome.afficherDiplome()

            if (data) {
                res.render('intranetDiplome', {dataDiplome : data})

            }else {
                res.render('intranetDiplome', {dataDiplome : {} })
            } 
        } catch (error) {
            console.log(error)
        }
    }
}


module.exports = {
    controlDip
}