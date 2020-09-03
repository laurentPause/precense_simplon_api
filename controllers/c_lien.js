const mongoose = require("mongoose");
const Lien = require("../models/lien");

exports.add = async function (req, res) {
    try {
        const verifExist = await Lien.findOne({idFiche: req.body.idFiche})
        if(!verifExist){
            const lien = await Lien.create({
                idFiche: req.body.idFiche,
                links: req.body.links,
                created: req.body.created
            })
            res.status(200).json({
                message: 'Liens créés !',
                liens: lien
            });
        }else{
            const lien = await Lien.findOneAndUpdate({idFiche: req.body.idFiche},{
                links: req.body.links,
                created: req.body.created
            })
            res.status(200).json({
                message: 'Liens mis à jour !',
                liens: lien
            });
        }
    } catch (e) {
        console.log(e)
        res.status(400).json({
            message: 'KO',
            erreur: e
        });
    }

}