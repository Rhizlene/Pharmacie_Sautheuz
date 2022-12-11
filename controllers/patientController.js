const modelPat = require('../models/modelPatient')

const controlPat = {

    async afficherPatient(req, res) {

        try {
            
            const data = await modelPat.Patient.afficherPatient()

            if (data) {
                res.render('intranetPatient', {dataPatient : data})

            }else {
                res.render('intranetPatient', {dataPatient : {} })
            } 
        } catch (error) {
            console.log(error)
        }
    },

    async formulairePatient(req, res) {

        try {
            
            const data = await modelPat.Patient.formulairePatient()

            if (data) {
                res.render('formulairePatient', {formPatient : data})

            }else {
                res.render('formulairePatient', {formPatient : {} })
            } 
        } catch (error) {
            console.log(error)
        }
    },

    async ajouterPatient(req, res) {

        try {
            
            const data = await modelPat.Patient.ajouterPatient(req)

            if (data) {
                res.redirect("/patient")

            }else {
                console.log("probleme")
                res.render("formulairePatient")
            } 
        } catch (error) {
            console.log(error)
        }
    },

    async afficherUnPatient(req, res) {

        try {
            
            const dataPat = await modelPat.Patient.afficherUnPatient(req)
            const dataMut = await modelPat.Patient.afficherLesMutuelles()

            if (dataPat && dataMut) {
                res.render("modifierPatient", {dataPatient : dataPat, dataMutuelle : dataMut})

            }else {
                res.render("modifierPatient", {dataPatient : {}, dataMutuelle : {}})
            } 
        } catch (error) {
            console.log(error)
        }
    },

    async modifierpatient(req, res) {

        try {
            
            const data = await modelPat.Patient.modifierPatient(req)

            if (data) {
                res.redirect("/patient")

            }else {
                console.log("probleme")
                res.redirect("patient/modifier/" + req.params.patId)
            } 
        } catch (error) {
            console.log(error)
        }
    }



}


module.exports = {
    controlPat
}