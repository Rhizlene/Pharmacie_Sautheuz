const modelOrdo = require('../models/modelOrdonnance')
const modelMedic = require('../models/modelMedicament')
const modelPath = require('../models/modelPathologie')
const modelPat = require('../models/modelPatient')
const modelMed = require('../models/modelMedecin')

const controlOrdo = {

    async afficherOrdonnance(req, res) {

        try {
            
            const dataOrdo = await modelOrdo.Ordonnance.afficherOrdonnance()

            if (dataOrdo) {
                res.render('intranetOrdonnance', {dataOrdonnance : dataOrdo})

            }else {
                res.render('intranetOrdonnance', {dataOrdonnance : {}})
            } 
        } catch (error) {
            console.log(error)
        }
    },

    async formulaireOrdonnance(req, res) {

        try {
            
            const dataMed = await modelMed.Medecin.afficherMedecin()
            const dataPat = await modelPat.Patient.afficherPatient()
            const dataMedicType = await modelMedic.Medicament.afficherMedicTypeDISTINCT()
            const dataMedicNom = await modelMedic.Medicament.afficherMedicNomDISTINCT()
            const dataPath = await modelPath.Pathologie.afficherPathologie()

            if (dataMed && dataPat && dataMedicNom && dataPath && dataMedicType) {
                res.render('formulaireOrdonnance', {dataMedecin : dataMed, dataPatient : dataPat, dataPathologie : dataPath, dataMedicNom : dataMedicNom, dataMedicType : dataMedicType})

            }else {
                res.render('formulaireOrdonnance', {dataMedecin : {}, dataPatient : {}, dataPathologie : {}, dataMedicNom : {}, dataMedicType : {}})
            } 
        } catch (error) {
            console.log(error)
        }
    },

    async afficherUneOrdonnance(req, res) {

        try {
            
            const dataOrdo = await modelOrdo.Ordonnance.afficherUneOrdonnance(req)
            const dataMed = await modelMed.Medecin.afficherMedecin()
            const dataPat = await modelPat.Patient.afficherPatient()
            const dataPath = await modelPath.Pathologie.afficherPathologie()

            if (dataOrdo && dataMed && dataPat && dataPath) {
                res.render("modifierOrdonnance", {dataOrdonnance : dataOrdo, dataMedecin : dataMed, dataPatient : dataPat, dataPathologie : dataPath})

            }else {
                res.render("modifierOrdonnance", {dataOrdonnance : {}, dataMedecin : {}, dataPatient : {}, dataPathologie : {}})
            } 
        } catch (error) {
            console.log(error)
        }
    },

    async modifierOrdonnance(req, res) {

        try {
            
            const data = await modelOrdo.Ordonnance.modifierOrdonnance(req)

            if (data) {
                res.redirect("/ordonnance")

            }else {
                console.log("probleme")
                res.redirect("ordonnance/modifier/" + req.params.ordoId)
            } 
        } catch (error) {
            console.log(error)
        }
    },

    async ajouterOrdonnance(req, res){

        try {
    
            const data = await modelOrdo.Ordonnance.ajouterOrdonnance(req)
    
            if(data){
    
                res.redirect("/ordonnance");
    
            }else{
    
                console.log("probleme");
                res.redirect("/ordonnance");
            }
    
        } catch (error) {
    
            console.log(error)
        }
    },

    async supprimerOrdonnance(req, res){

        try {
    
            const data = await modelOrdo.Ordonnance.supprimerOrdonnance(req)
    
            if(data){
    
                res.redirect("/ordonnance");
    
            }else{
    
                console.log("probleme");
                res.redirect("/ordonnance");
            }
    
        } catch (error) {
    
            console.log(error)
        }
    },

    async rechercherOrdonnance(req, res) {

        try {
            
            const data = await modelOrdo.Ordonnance.rechercherOrdonnance(req)

            if (data) {
                res.render('rechercheOrdonnance', {dataOrdonnance : data})

            }else {
                res.render('rechercheOrdonnance', {dataOrdonnance : {} })
            } 
        } catch (error) {
            console.log(error)
        }
    },

    async afficherRechercheOrdonnance(req, res) {

        try {

            const data = await modelOrdo.Ordonnance.rechercherOrdonnance(req)

            if (data) {
                res.render("intranetOrdonnance", {dataOrdonnance : data})

            }else {
                console.log("probleme")
                res.redirect("ordonnance/recherche")
            } 
        } catch (error) {
            console.log(error)
        }
    }
}


module.exports = {
    controlOrdo
}