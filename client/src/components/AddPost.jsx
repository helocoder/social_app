import AddCircleIcon from '@mui/icons-material/AddCircle';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import axios from 'axios';

const AddPost = () => {
    const [open,setOpen] = useState(false);
    const [desc,setDesc] = useState("");
    const [image,setImage] = useState("");

    const submitHandler = async() => {
    const data = new FormData();
    data.append("file",image);
    data.append("upload_preset","socialapp");
    data.append("cloud_name","skilzen");
        const user = JSON.parse(localStorage.getItem("user"));
        const res = await axios.post("https://api.cloudinary.com/v1_1/skilzen/image/upload",data);

        const post = await axios.post("/posts/",{
            userId:user._id,
            desc,
            img:res.data.url
        })

        setOpen(false);


    }

    return(
        <>
        <Tooltip sx={{position:"fixed",bottom:30,left:30,zIndex:99,backgroundColor:"black",color:"white",
        "&:hover":{
            backgroundColor:"white",
            color:"black"
        }}} title="Create a post" onClick={()=>setOpen(true)}>
      <IconButton>
        <AddCircleIcon sx={{fontSize:52}}/>
      </IconButton>
    </Tooltip>
    <Modal
    sx={{display:"flex",justifyContent:"center",alignItems: "center"}}
  open={open}
  onClose={()=>setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={{backgroundColor:"white",width:400,height:400,padding:3}}
  borderRadius={5}
  >
    <Typography variant="h4" align="center">Create a Post</Typography>
    <TextField required id="standard-basic" label="Whats on your mind?" fullWidth variant="standard"
    value={desc}
    onChange={(e)=>setDesc(e.target.value)} />

    <label htmlFor="icon-button-file">
  <input style={{display:"none"}} accept="image/*" id="icon-button-file" type="file" onChange={(e)=>setImage(e.target.files[0])} />
  <IconButton color="primary" aria-label="upload picture" component="span">
    <PhotoCamera />
  </IconButton>
  <Button onClick={submitHandler} sx={{
    padding:2,
    color:"white",
    backgroundColor:"black",
    "&:hover":{
        color:"black",
        backgroundColor:"white"
    },
}} borderRadius={2}>Submit Post</Button>
</label>
  </Box>
</Modal>
</>
    )
}
export default AddPost;