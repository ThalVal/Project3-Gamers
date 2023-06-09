const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Ending = require('../models/Ending');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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

router.post("/login",(req,res)=>{
    //TODO: sign jwt
    User.findOne({
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

router.post("/signup", (req, res) => {
    console.info(req.body);
    //TODO:create user, sign jw
    User.create({
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

router.get("/profile",(req,res)=>{
    //TODO: get userdata from jwt, verify jwt
    // console.log(req.headers);
    const token = req.headers.authorization?.split(" ")[1]
    console.log(token)
    try{
        const data = jwt.verify(token,process.env.JWT_SECRET)
        User.findByPk(data.userId).then(user=>{
            res.json(user)
        })
    }catch(err){
        console.log(err);
        res.status(403).json({msg:"invalid token",err})
    }
})

module.exports = router;