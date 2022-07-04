const mongoose = require("mongoose");

const {Schema} = mongoose;

const PostSchema = new Schema({
    userId:{
        type:String,
        required:true
    },
     desc:{
        type:String,
        required:true,
        max:50,
     },
     img:{
        type:String,
     },
     likes:{
        type:Array,
        default:[]
     }
},{
    timestamps:true,
})

module.exports = mongoose.model("Post",PostSchema);