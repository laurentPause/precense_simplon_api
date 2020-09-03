const mongoose = require("mongoose");
const Fiches = require("../models/feuilles");
const Formateurs = require("../models/feuilles");

exports.add = async function (req, res) {
    try {
        const fiche = await Fiches.create({
            idSheet: req.body.idSheet,
            logo: req.body.logo,
            section: req.body.section,
            semaine: req.body.semaine,
            apprenants: req.body.apprenants,
            formateurs: req.body.formateurs
        })
        res.status(200).json({
            message: 'OK'
        });

    } catch (e) {
        console.log(e)
        res.status(400).json({
            message: 'KO',
            erreur: e
        });
    }

}

exports.update = async function (req, res) {
    try {
        const fiche = await Fiches.findByIdAndUpdate(
            req.params.id, {
                semaine: req.body.semaine,
                apprenants: req.body.apprenants,
                formateurs: req.body.formateurs
            }
        )
        res.status(200).json({
            message: 'OK'
        });

    } catch (e) {
        console.log(e)
        res.status(400).json({
            message: 'KO',
            erreur: e
        });
    }

}

exports.signature = async function (req, res) {
    try {
        const fiche = await Fiches.findByIdAndUpdate(
            req.body.id, {
                apprenants: req.body.apprenants
            }
        )
        res.status(200).json({
            message: 'OK'
        });

    } catch (e) {
        console.log(e)
        res.status(400).json({
            message: 'KO',
            erreur: e
        });
    }

}


exports.delete = async function (req, res) {
    try {
        const fiche = await Fiches.findOneAndDelete(
           { _id: req.params.id }
        )
        res.status(200).json({
            message: 'OK'
        });

    } catch (e) {
        console.log(e)
        res.status(400).json({
            message: 'KO',
            erreur: e
        });
    }

}

exports.all = async function (req, res) {
    try {
        const fiches = await Fiches.find({}).populate('section');
        res.status(200).json({
            message: 'OK',
            fiches: fiches
        })
    } catch (e) {
        res.status(400).json({
            message: 'KO',
            erreur: e
        });
    }

}