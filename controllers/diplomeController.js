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
    },

    async formulaireDiplome(req, res) {

        try {

            res.render('formulaireDiplome');
        } catch (error) {
            console.log(error)
        }
    },

    async modifierDiplome(req, res) {

        try {
            
            const data = await modelDip.Diplome.modifierDiplome(req)

            if (data) {
                res.redirect("/diplome")

            }else {
                console.log("probleme")
                res.redirect("diplome/modifier/" + req.params.dipId)
            } 
        } catch (error) {
            console.log(error)
        }
    },

    async afficherUnDiplome(req, res) {

        try {
            
            const dataDip = await modelDip.Diplome.afficherUnDiplome(req)

            if (dataDip) {
                res.render("modifierDiplome", {dataDiplome : dataDip})

            }else {
                res.render("modifierDiplome", {dataDiplome : {}})
            } 
        } catch (error) {
            console.log(error)
        }
    },

    async ajouterDiplome(req, res) {

        try {
            
            const data = await modelDip.Diplome.ajouterDiplome(req)

            if (data) {
                res.redirect("/diplome")

            }else {
                console.log("probleme")
                res.render("formulaireDiplome")
            } 
        } catch (error) {
            console.log(error)
        }
    }
}


module.exports = {
    controlDip
}