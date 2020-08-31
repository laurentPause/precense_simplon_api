const mongoose = require("mongoose");
const Sections = require("../models/sections");
const SectionsFormateurs = require("../models/sections_formateurs");

exports.add = async function (req, res) {
    try{
        const verifExist = await Sections.findOne({
            intitule: req.body.intitule,
            date: req.body.date
        })
        if(!verifExist){
            const section = await Sections.create({
                intitule: req.body.intitule,
                date: req.body.date
            })
            res.status(200).json({
                message: 'OK'
              });
        }else{
            res.status(400).json({
                message: 'KO',
                erreur: 'existe'
              });
        }
        
    }catch(e){
        res.status(400).json({
            message: 'KO',
            erreur: e
          });
    }
    
}

exports.assoce = async function (req, res) {
    try{
        const verifExist = await SectionsFormateurs.findOne({
            section: req.body.section,
            formateur: req.body.formateur
        })
        if(!verifExist){
            const section = await SectionsFormateurs.create({
                section: req.body.section,
                formateur: req.body.formateur,
                role: req.body.role
            })
            res.status(200).json({
                message: 'OK'
              });
        }else{
            res.status(400).json({
                message: 'KO',
                erreur: 'existe'
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
        const section = await Sections.find({})
        res.status(200).json({
            message: 'OK',
            sections: section
          });
    }catch(e){
        res.status(400).json({
            message: 'KO'
          });
    }
    
}