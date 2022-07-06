import { useState } from "react";
import { BsEyeFill,BsEyeSlashFill } from "react-icons/bs";
import axios from 'axios';
import {useNavigate,Link} from "react-router-dom";


const Register = () => {
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [visible,setVisible] = useState(false);
    const navigate = useNavigate();


    const registerHandler = async(e) => {
        e.preventDefault();

        const newUser = {
            username,email,password
        }
        
        try{
        const res = await axios.post("/auth/register",newUser)

        navigate("/login");
        }catch(err){
            console.log(err);
        }


        setUsername("");
        setEmail("");
        setPassword("");
    }
  return (
    <div className="min-h-screen bg-stone-200 py-4 px-8 flex justify-center items-center">
        <div className="w-1/3  bg-white flex flex-col items-center rounded-2xl drop-shadow-lg">
            <h1 className="text-2xl font-bold text-stone-900 mt-3">Register:</h1>
            <form onSubmit={registerHandler} className="flex flex-col w-3/4 mx-auto my-5 gap-y-2" >
                <label>Username</label>
                <input
                value={username}
                onChange={(e)=>setUsername(e.target.value)} className="p-2 rounded-2xl focus:outline-none border-2 border-stone-900" type="text" placeholder="username e.g. utk"/>
                <label>Email</label>
                <input
                 value={email}
                 onChange={(e)=>setEmail(e.target.value)}  className="p-2 rounded-2xl focus:outline-none border-2 border-stone-900"  type="email" placeholder="email e.g. abc@gmail.com"/>
                <label>Password</label>
                <div className="relative border-2 border-stone-900 p-2 rounded-2xl">
                <input
                 value={password}
                 onChange={(e)=>setPassword(e.target.value)}  className="focus:outline-none"  type={visible?"text":"password"} placeholder="password"/>
                 {visible ? <BsEyeFill
                 onClick={()=>setVisible(false)}
                  className="text-red-500 text-lg absolute right-5 top-3"/>:
                 <BsEyeSlashFill
                 onClick={()=>setVisible(true)}
                  className="text-red-500 text-lg absolute right-5 top-3"/>}
                 </div>
                <input className="my-2 p-2 rounded-2xl focus:outline-none bg-stone-900 text-stone-200"  type="submit" />
                <span className="text-stone-700 text-sm flex gap-x-2">Already a user go to <Link to="/login" className="text-red-500">Login</Link></span>
            </form>
        </div>

    </div>
  )
}

export default Register