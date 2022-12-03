const modelPath = require('../models/modelPathologie')

const controlPath = {

    async afficherPathologie(req, res) {

        try {
            
            const data = await modelPath.Pathologie.afficherPathologie()

            if (data) {
                res.render('intranetPathologie', {dataPathologie : data})

            }else {
                res.render('intranetPathologie', {dataPathologie : {} })
            } 
        } catch (error) {
            console.log(error)
        }
    }
}


module.exports = {
    controlPath
}