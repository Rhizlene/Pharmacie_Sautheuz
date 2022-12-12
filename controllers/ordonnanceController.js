const modelOrdo = require('../models/modelOrdonnance')

const controlOrdo = {

    async afficherOrdonnance(req, res) {

        try {
            
            const data = await modelOrdo.Ordonnance.afficherOrdonnance()

            if (data) {
                res.render('intranetOrdonnance', {dataOrdonnance : data})

            }else {
                res.render('intranetOrdonnance', {dataOrdonnance : {} })
            } 
        } catch (error) {
            console.log(error)
        }
    },

    async formulaireOrdonnance(req, res) {

        try {
            
            const data = await modelOrdo.Ordonnance.formulaireOrdonnance()

            if (data) {
                res.render('formulaireOrdonnance', {formOrdonnance : data})

            }else {
                res.render('formulaireOrdonnance', {formOrdonnance : {} })
            } 
        } catch (error) {
            console.log(error)
        }
    },

    async supprimerOrdonnance(req, res){

        try {
    
            const data = await modelOrdo.Ordonnance.supprimerOrdonnace(req)
    
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
    controlOrdo
}