const mongoose = require("mongoose");
const Formateurs = require("../models/formateurs");
const Sections_Formateurs = require("../models/sections_formateurs");

exports.add = async function (req, res) {
    try{
        const verifFormateurExist = await Formateurs.findOne({
            nom: req.body.nom,
            prenom: req.body.prenom
        })
        const verifCodeExist = await Formateurs.findOne({
            code: req.body.code
        })
        if(!verifFormateurExist && !verifCodeExist){
            const formateur = await Formateurs.create({
                nom: req.body.nom,
                prenom: req.body.prenom,
                code: req.body.code

            })
            res.status(200).json({
                message: 'OK'
              });
        }else{
            var erreur =''
            if(verifFormateurExist){
                erreur = '0'
            }else{
                erreur = '1'
            }
            res.status(200).json({
                message: 'KO',
                erreur: erreur
              });
        }
        
    }catch(e){
        res.status(400).json({
            message: 'KO',
            erreur: e
          });
    }
    
}

exports.all = async function (req, res) {
    try{
        const formateurs = await Formateurs.find({})
        res.status(200).json({
            message: 'OK',
            formateurs: formateurs
          });
    }catch(e){
        res.status(400).json({
            message: 'KO'
          });
    }
    
}

exports.find = async function (req, res) {
    try{
        const formateurs = await Formateurs.find(req.body.fitre)
        res.status(200).json({
            message: 'OK',
            results: formateurs
          });
    }catch(e){
        res.status(400).json({
            message: 'KO'
          });
    }
    
}