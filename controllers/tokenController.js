const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

router.get("/",(req,res)=>{
    // GET userdata from jwt, verify jwt
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