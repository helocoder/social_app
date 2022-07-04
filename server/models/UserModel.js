const mongoose = require('mongoose');

const {Schema} = mongoose;

const UserSchema = new Schema({
    username:{
        type:String,
        required:true,
        min:4,
        max:15,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        min:3,
        max:20,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        min:5,
    },
    coverPhoto:{
        type:String,
        default:""
    },
    profilePic:{
        type:String,
        default:""
    },
    followers:{
        type:Array,
        default:[]
    },
    followings:{
        type:Array,
        default:[],
    },
    desc:{
        type:String,
        max:50,
    },
    place:{
        type:String,
        max:20,
    }
},{
    timestamps:true,
})

module.exports = mongoose.model("User",UserSchema);