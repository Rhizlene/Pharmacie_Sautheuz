const modelConnPhar = require('../models/modelConnexion');

const controlConnPhar = {

    async Connexion(req, res) {

        try {
            
            const data = await modelConnPhar.ConnexionPharmacien.Connexion(req)

            if (data[0]['COUNT(*)'] == 1) {
                res.render('intranetAccueil')

            }else {
                res.redirect("/inscription")
            } 
        } catch (error) {
            console.log(error)
        }
    }
}


module.exports = {
    controlConnPhar
}