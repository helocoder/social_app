require("dotenv").config();
const express = require('express');
const app = express();
const mongoose = require("mongoose");
const multer = require("multer");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");

// middlewares
app.use(express.json());

// uploading files
// storage
const storage = multer.diskStorage({
    destination:(req,file,cb) => {
        cb(null,"public/images");
    },
    filename:(req,file,cb) => {
        cb(null,file.originalname)
    }
})

const upload = multer({storage});

app.post("/upload",upload.single("file"),(req,res)=>{
    res.json({msg:"File uploaded successfully"})
});

// routes
app.use("/auth",authRoutes);
app.use("/users",userRoutes);
app.use("/posts",postRoutes);

// opening port

mongoose.connect(process.env.MONGO_URI,()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`connected to db and running on port ${process.env.PORT}`);
    })
})
