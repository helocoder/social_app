const express = require('express');
const router = express.Router();
const User = require('../models/UserModel');
const bcrypt = require("bcrypt");

// updating the user
router.patch("/:id",async(req,res)=>{
    const {id} = req.params;
    const {userId} = req.body;

    if(id !== userId){
        return res.json({err:"You dont have right to do this"})
    }

    if(req.body.password){
        req.body.password = await bcrypt.hash(req.body.password,12);
    }

    try{

      const user = await User.findByIdAndUpdate(id,{
        ...req.body
      });

      res.json({msg:"user updated"});


    }catch(err){
        console.log(err);
    }
})

// delete the user
router.delete("/:id",async(req,res)=>{
    const {id} = req.params;
    const {userId} = req.body;

    if(id !== userId){
        return res.json({err:"You dont have right to do this"})
    }

    try{
      const user = await User.findByIdAndDelete(id);
      res.json({msg:"user deleted"});
    }catch(err){
        console.log(err);
    }
});

// get a single user
router.get("/:id",async(req,res)=>{
    const {id} = req.params;

    try{
      const user = await User.findById(id);
      res.json({
        email:user.email,
        username:user.username
      });
    }catch(err){
        console.log(err);
    }
});

// access friends
router.get("/friends/:userId",async(req,res)=>{
    const {userId} = req.params;
    try{

        const user = await User.findById(userid);
        const friends = await Promise.all(
            user.followings.map((friendId)=>{
                return User.findById(friendId);
            })
        )

        let friendlist = [];
        friends.map((friend)=>{
            const {_id,username,profilePic} = friend;
            friendlist.push({_id,username,profilePic});
        })

        res.json(friendlist);
    }catch(err){
        console.log(err)
    }
})

// follow a user 
router.patch("/:id/follow",async(req,res)=>{
    const {userId} = req.body;
    const {id} = req.params;
    if(userId === id){
        return res.json({err:"cant follow yourself"});
    }
    try{
        const user = await User.findById(userId);
        const followedPerson = await User.findById(id);
        if(followedPerson.followers.includes(userId)){
            return res.json({err:"you are already following this person"})
        }
        await followedPerson.updateOne({$push:{followers:userId}})
        await user.updateOne({$push:{followings:id}});
        res.json({msg:"user has been followed"});
    }catch(err){
        console.log(err);
    }
})

// unfollow a user 
router.patch("/:id/unfollow",async(req,res)=>{
    const {userId} = req.body;
    const {id} = req.params;
    if(userId === id){
        return res.json({err:"cant unfollow yourself"});
    }
    try{
        const user = await User.findById(userId);
        const followedPerson = await User.findById(id);
        if(!followedPerson.followers.includes(userId)){
            return res.json({err:"you are not following this person"})
        }
        await followedPerson.updateOne({$pull:{followers:userId}})
        await user.updateOne({$pull:{followings:id}});
        res.json({msg:"user has been unfollowed"});
    }catch(err){
        console.log(err);
    }
})

module.exports = router 

