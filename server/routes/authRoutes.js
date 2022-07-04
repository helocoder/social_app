const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const User = require("../models/UserModel");

// signup
router.post("/register",async(req,res)=>{
    const {username,email,password} = req.body;
    if(!username || !email || !password){
        return res.json("Fill out all the fields");
    }
    try{
        const hashedPassword = await bcrypt.hash(password,12);
        const user = await User.create({
            username,
            email,
            password:hashedPassword
        })

        res.json(user);

    }catch(err){
       console.log(err); 
    }
})


// signin
router.post("/login",async (req,res)=>{
    const {email,password} = req.body;
    if(!email || !password){
        return res.json({msg:"fill out all"});
    }
    try{
       const user = await User.find({email});
       if(!user){
        return res.json({msg:"register first"});
       } 
       const valid = await bcrypt.compare(password,user.password);
       if(!valid){
        return res.json({msg:"password incorrect"});
       }

       res.json(user);
    }catch(err){
        return res.json({err:"Invalid Credentials"})
    }
})


module.exports = router;