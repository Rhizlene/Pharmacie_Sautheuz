const modelPos = require('../models/modelPosologie')
const modelMedic = require('../models/modelMedicament')
const modelOrdo = require('../models/modelOrdonnance')

const controlPos = {

    async afficherPosologie(req, res) {

        try {
            
            const dataPos = await modelPos.Posologie.afficherUnePosologiePourUneOrdonnance(req)

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
    }
}


module.exports = {
    controlPos
}