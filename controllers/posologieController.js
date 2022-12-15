const modelPos = require('../models/modelPosologie')
const modelMedic = require('../models/modelMedicament')
const modelOrdo = require('../models/modelOrdonnance')

const controlPos = {

    async afficherPosologie(req, res) {

        try {
            
            const dataPos = await modelPos.Posologie.afficherPosologie(req)

            if (dataPos) {
                res.render('intranetPosologie', {dataPosologie : dataPos})

            }else {
                res.render('intranetPosologie', {dataPosologie : {}})
            } 
        } catch (error) {
            console.log(error)
        }
    },

    async formulairePosologie(req, res) {

        try {
            
            const dataOrdo = await modelOrdo.Ordonnance.afficherUneOrdonnance(req)
            const dataMedic = await modelMedic.Medicament.afficherMedicament()

            if (dataMedic  && dataOrdo) {
                res.render('formulairePosologie', {dataMedicament : dataMedic, dataOrdonnance : dataOrdo})

            }else {
                res.render('formulairePosologie', {dataMedicament : {}, dataOrdonnance : {}})
            } 
        } catch (error) {
            console.log(error)
        }
    },

    async ajouterPosologie(req, res) {

        try {
            
            const dataPos = await modelPos.Posologie.ajouterPosologie(req)

            if (dataPos) {
                res.redirect("/ordonnance")

            }else {
                console.log("probleme")
                res.render("formulairePosologie")
            } 
        } catch (error) {
            console.log(error)
        }
    },

    async afficherUnePosologie(req, res) {

        try {
            
            const dataPos = await modelPos.Posologie.afficherUnePosologie(req)
            const dataMedic = await modelMedic.Medicament.afficherMedicament(req)

            if (dataPos && dataMedic) {
                res.render("modifierPosologie", {dataPosologie : dataPos, dataMedicament : dataMedic})

            }else {
                res.render("modifierPosologie", {dataPosologie : {}, dataMedicament : {}})
            }
        } catch (error) {
            console.log(error)
        }
    },

    async modifierPosologie(req, res) {

        try {
            
            const data = await modelPos.Posologie.modifierPosologie(req)

            if (data) {
                res.redirect("/ordonnance")

            }else {
                console.log("probleme")
                res.redirect("posologie/modifier/" + req.params.posId)
            } 
        } catch (error) {
            console.log(error)
        }
    },

    async supprimerPosologie(req, res){

        try {
    
            const data = await modelPos.Posologie.supprimerPosologie(req)
    
            if(data){
    
                res.redirect("/ordonnance");
    
            }else{
    
                console.log("probleme");
                res.redirect("/ordonnance");
            }
    
        } catch (error) {
    
            console.log(error)
        }
    }
}


module.exports = {
    controlPos
}