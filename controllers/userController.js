const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require("bcrypt");

router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll();
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const userData = await User.findByPk(req.params.id);
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.post("/login", async (req,res) => {
    //TODO: sign jwt
    await User.findOne({
        where:{
            username: req.body.username
        }
    }).then(foundUser=>{
        if(!foundUser){
            return res.status(401).json({msg:"invalid credentials"})
        } else if(!bcrypt.compareSync(req.body.password,foundUser.password)){
            return res.status(401).json({msg:"invalid credentials"})
        } else {
            // const token = jwt.sign({
            //     username:foundUser.username,
            //     userId:foundUser.id
            // },process.env.JWT_SECRET,{
            //     expiresIn:"2h"
            // })
            // console.log(token);
           return res.json({
            foundUser
           })
        }
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"an error",err})
    })
})

router.post("/signup", async (req, res) => {
    console.info(req.body);
    //TODO:create user, sign jw
    await User.create({
        // email:req.body.email,
        username:req.body.username,
        password:req.body.password,
    }).then(newser=>{
        // const token = jwt.sign({
        //     username:newser.username,
        //     userId:newser.id
        // },process.env.JWT_SECRET,{
        //     expiresIn:"2h"
        // })
        res.status(200).json(newser);
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"an error",err})
    })
})

module.exports = router;