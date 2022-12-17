const modelMut = require('../models/modelMutuelle')

const controlMut = {

    async afficherMutuelle(req, res) {

        try {
            
            const data = await modelMut.Mutuelle.afficherMutuelle()

            if (data) {
                res.render('intranetMutuelle', {dataMutuelle : data})

            }else {
                res.render('intranetMutuelle', {dataMutuelle : {} })
            } 
        } catch (error) {
            console.log(error)
        }
    },

    async modifierMutuelle(req, res) {

        try {
            
            const data = await modelMut.Mutuelle.modifierMutuelle(req)

            if (data) {
                res.redirect("/mutuelle")

            }else {
                console.log("probleme")
                res.redirect("mutuelle/modifier/" + req.params.mutId)
            } 
        } catch (error) {
            console.log(error)
        }
    },

    async supprimerMutuelle(req, res){

		try {

			const data = await modelMut.Mutuelle.supprimerMutuelle(req)

			if(data){

				res.redirect("/mutuelle");

			}else{

				console.log("probleme");
				res.redirect("/mutuelle");
			}

		} catch (error) {

			console.log(error)
		}
	},

    async afficherUneMutuelle(req, res) {

        try {
            
            const dataMut = await modelMut.Mutuelle.afficherUneMutuelle(req)

            if (dataMut) {
                res.render("modifiermutuelle", {dataMutuelle : dataMut})

            }else {
                res.render("modifiermutuelle", {dataMutuelle : {}})
            } 
        } catch (error) {
            console.log(error)
        }
    },

    async ajouterMutuelle(req, res) {

        try {
            
            const data = await modelMut.Mutuelle.ajouterMutuelle(req)

            if (data) {
                res.redirect("/mutuelle")

            }else {
                console.log("probleme")
                res.render("formulaireMutuelle")
            } 
        } catch (error) {
            console.log(error)
        }
    },

    async formulaireMutuelle(req, res) {

        try {
            
            res.render("formulaireMutuelle")
        } catch (error) {
            console.log(error)
        }
    },


    async rechercherMutuelle(req, res) {

        try {
            
            const data = await modelMut.Mutuelle.rechercherMutuelle(req)

            if (data) {
                res.render('rechercheMutuelle', {dataMutuelle : data})

            }else {
                res.render('rechercheMutuelle', {dataMutuelle : {} })
            } 
        } catch (error) {
            console.log(error)
        }
    },

    async afficherRechercheMutuelle(req, res) {

        try {

            const data = await modelMut.Mutuelle.rechercherMutuelle(req)

            if (data) {
                res.render("intranetMutuelle", {dataMutuelle : data})

            }else {
                console.log("probleme")
                res.redirect("mutuelle/recherche")
            } 
        } catch (error) {
            console.log(error)
        }
    }

}


module.exports = {
    controlMut
}