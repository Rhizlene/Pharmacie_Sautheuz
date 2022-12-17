const modelPat = require('../models/modelPatient')
const modelMut = require('../models/modelMutuelle')

const controlPat = {

    async afficherPatient(req, res) {

        try {
            
            const dataPat = await modelPat.Patient.afficherPatient()

            if (dataPat) {
                res.render('intranetPatient', {dataPatient : dataPat})

            }else {
                res.render('intranetPatient', {dataPatient : {}})
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
            const dataMut = await modelMut.Mutuelle.afficherMutuelle()

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
    },

    async supprimerPatient(req, res){

        try {
    
            const data = await modelPat.Patient.supprimerPatient(req)
    
            if(data){
    
                res.redirect("/patient");
    
            }else{
    
                console.log("probleme");
                res.redirect("/patient");
            }
    
        } catch (error) {
    
            console.log(error)
        }
    },

    async rechercherPatient(req, res) {

        try {
            
            const data = await modelPat.Patient.rechercherPatient(req)

            if (data) {
                res.render('recherchePatient', {dataPatient : data})

            }else {
                res.render('recherchePatient', {dataPatient : {} })
            } 
        } catch (error) {
            console.log(error)
        }
    },

    async afficherRecherchePatient(req, res) {

        try {

            const data = await modelPat.Patient.rechercherPatient(req)

            if (data) {
                res.render("intranetPatient", {dataPatient : data})

            }else {
                console.log("probleme")
                res.redirect("patient/recherche")
            } 
        } catch (error) {
            console.log(error)
        }
    }




}


module.exports = {
    controlPat
}