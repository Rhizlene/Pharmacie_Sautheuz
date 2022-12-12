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
    },

    async modifierPathologie(req, res) {

        try {
            
            const data = await modelPath.Pathologie.modifierPathologie(req)

            if (data) {
                res.redirect("/pathologie")

            }else {
                console.log("probleme")
                res.redirect("pathologie/modifier/" + req.params.pathId)
            } 
        } catch (error) {
            console.log(error)
        }
    },

    async supprimerPathologie(req, res){

        try {
    
            const data = await modelPath.Pathologie.supprimerPathologie(req)
    
            if(data){
    
                res.redirect("/pathologie");
    
            }else{
    
                console.log("probleme");
                res.redirect("/pathologie");
            }
    
        } catch (error) {
    
            console.log(error)
        }
    },

    async afficherUnePathologie(req, res) {

        try {
            
            const dataPath = await modelPath.Pathologie.afficherUnePathologie(req)

            if (dataPath) {
                res.render("modifierPathologie", {dataPathologie : dataPath})

            }else {
                res.render("modifierPathologie", {dataPathologie : {}})
            } 
        } catch (error) {
            console.log(error)
        }
    },

    async ajouterPathologie(req, res) {

        try {
            
            const data = await modelPath.Pathologie.ajouterPathologie(req)

            if (data) {
                res.redirect("/pathologie")

            }else {
                console.log("probleme")
                res.render("formulairePathologie")
            } 
        } catch (error) {
            console.log(error)
        }
    },

    async formulairePathologie(req, res) {

        try {
            
            res.render("formulairePathologie")
        } catch (error) {
            console.log(error)
        }
    }
}


module.exports = {
    controlPath
}