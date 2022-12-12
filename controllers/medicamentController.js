const modelMedic = require('../models/modelMedicament')

const controlMedic = {

    async afficherMedicament(req, res) {

        try {
            
            const data = await modelMedic.Medicament.afficherMedicament()

            if (data) {
                res.render('intranetMedicament', {dataMedicament : data})

            }else {
                res.render('intranetMedicament', {dataMedicament : {} })
            } 
        } catch (error) {
            console.log(error)
        }
    },

    async formulaireMedicament(req, res) {

        try {

            res.render('formulaireMedicament');
        } catch (error) {
            console.log(error)
        }
    },

    async modifierMedicament(req, res) {

        try {
            
            const data = await modelMedic.Medicament.modifierMedicament(req)

            if (data) {
                res.redirect("/medicament")

            }else {
                console.log("probleme")
                res.redirect("medicament/modifier/" + req.params.medicId)
            } 
        } catch (error) {
            console.log(error)
        }
    },

    async supprimerMedicament(req, res){

		try {

			const data = await modelMedic.Medicament.supprimerMedicament(req)

			if(data){

				res.redirect("/medicament");

			}else{

				console.log("probleme");
				res.redirect("/medicament");
			}

		} catch (error) {

			console.log(error)
		}
	},

    async afficherUnMedicament(req, res) {

        try {
            
            const dataMedic = await modelMedic.Medicament.afficherUnMedicament(req)

            if (dataMedic) {
                res.render("modifierMedicament", {dataMedicament : dataMedic})

            }else {
                res.render("modifierMedicament", {dataMedicament : {}})
            } 
        } catch (error) {
            console.log(error)
        }
    },

    async ajouterMedicament(req, res) {

        try {
            
            const data = await modelMedic.Medicament.ajouterMedicament(req)

            if (data) {
                res.redirect("/medicament")

            }else {
                console.log("probleme")
                res.render("formulaireMedicament")
            } 
        } catch (error) {
            console.log(error)
        }
    }


}


module.exports = {
    controlMedic
}