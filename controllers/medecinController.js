const modelMed = require('../models/modelMedecin');
const modelDip = require('../models/modelDiplome');

const controlMed = {

    async afficherMedecin(req, res) {

        try {
            
            const data = await modelMed.Medecin.afficherMedecin()

            if (data) {
                res.render('intranetMedecin', {dataMedecin : data})

            }else {
                res.render('intranetMedecin', {dataMedecin : {} })
            } 
        } catch (error) {
            console.log(error)
        }
    },

    async formulaireMedecin(req, res) {

        try {
            
            const data = await modelDip.Diplome.afficherDiplome()

            if (data) {
                res.render('formulaireMedecin', {formMedecin : data})

            }else {
                res.render('formulaireMedecin', {formMedecin : {} })
            } 
        } catch (error) {
            console.log(error)
        }
    },

    async afficherUnMedecin(req, res) {

        try {
            
            const dataMed = await modelMed.Medecin.afficherUnMedecin(req)
            const dataDip = await modelDip.Diplome.afficherDiplome()

            if (dataMed && dataDip) {
                res.render("modifierMedecin", {dataMedecin : dataMed, dataDiplome : dataDip})

            }else {
                res.render("modifierMedecin", {dataMedecin : {}, dataDiplome : {}})
            } 
        } catch (error) {
            console.log(error)
        }
    },

    async modifierMedecin(req, res) {

        try {
            
            const data = await modelMed.Medecin.modifierMedecin(req)

            if (data) {
                res.redirect("/medecin")

            }else {
                console.log("probleme")
                res.redirect("medecin/modifier/" + req.params.medId)
            } 
        } catch (error) {
            console.log(error)
        }
    },

    async ajouterMedecin(req, res) {

        try {
            
            const data = await modelMed.Medecin.ajouterMedecin(req)

            if (data) {
                res.redirect("/medecin")

            }else {
                console.log("probleme")
                res.render("formulaireMedecin")
            } 
        } catch (error) {
            console.log(error)
        }
    }


}


module.exports = {
    controlMed
}