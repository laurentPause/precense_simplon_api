const mongoose = require("mongoose");
const Users = require("../models/users");
const bcrypt = require('bcrypt');

exports.add = async function (req, res) {
    try{
        const verifUserExist = await Users.findOne({
            login: req.body.code
        })
        const verifEmailExist = await Users.findOne({
            email: req.body.email
        })
        if(!verifUserExist && !verifEmailExist){
            bcrypt.hash('pass', 10, async (err, hash) => {
                const formateur = await Users.create({
                    nom: req.body.nom,
                    prenom: req.body.prenom,
                    login: req.body.code,
                    email: req.body.email,
                    password: hash
                })
            })
            
            res.status(200).json({
                message: 'User ajouter !'
              });
        }else{
            var erreur ='erreur'
            if(verifUserExist){
                message = 'User existe'
            }else{
                message = 'Email existe'
            }
            res.status(400).json({
                message: message
              });
        }
        
    }catch(e){
        console.log('erreur', e)
        res.status(400).json({
            message: 'Erreur serveur !'
          });
    }
    
}

exports.find = async function (req, res) {
    try{
        const users = await Users.find(req.body.fitre)
        res.status(200).json({
            message: 'OK',
            users: users
          });
    }catch(e){
        res.status(400).json({
            message: 'KO'
          });
    }
    
}