const express = require("express");
const router = express.Router();
const Post = require('../models/PostModel')

// create a post
router.post("/",async(req,res)=>{
    try{
        const post = await Post.create({
            ...req.body,
        });
        res.json(post);
    }catch(err){
        console.log(err);
    }
})

//update post
router.patch("/:id",async(req,res)=>{
    const {id} = req.params;
    try{
        const post = await Post.findByIdAndUpdate(id,{
            ...req.body
        })
        res.json({msg:"post is updated"});

    }catch(err){console.log(err)}
}) 

// delete
router.delete("/:id",async(req,res)=>{
    const {id} = req.params;
    try{
        const post = await Post.findByIdAndDelete(id)
        res.json({msg:"post is deleted"});
        
    }catch(err){console.log(err)}
}) 

// update likes

router.patch("/:id/like",async(req,res)=>{
    const {id} = req.params;
    const {userId} = req.body;
    try{

        const post = await Post.findById(id);
        if(post.likes.includes(userId)){
            return res.json({err:"already liked the post"});
        }

        await post.updateOne({$push:{likes: userId}});
        res.json({msg:"post liked"});

    }catch(err){console.log(err)}
})

// get a post
router.get("/:id",async(req,res)=>{
    const {id} = req.params;
    try{
        const post = await Post.findById(id);
        res.json(post);
    }catch(err){console.log(err)}
})

// timeline
router.get("/timeline/:userId",async(req,res)=>{
    const {userId} = req.params;

    try{

        const user = await User.findById(userId);
        const userPosts = await Post.find({userId});

        const friendsPosts = await Promise.all(
            user.followings.map((friendId)=>{
                return Post.find({userId:friendId})
            })
        ) 

        res.json(userPosts.concat(...friendsPosts));
    }catch(err){console.log(err)}
})

// get your posts(profile)
router.get("/:userId",async(req,res)=>{
    const {userId} = req.params;
    try{
        const posts = await Post.find({userId});
        res.json(posts)
    }catch(err){console.log(err)}
})
module.exports = router;