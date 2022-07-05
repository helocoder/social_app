import React, { useState } from 'react'

function Login() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const loginHandler = (e) => {
        e.preventDefault();
        const loginData = {
            email,password
        }
        console.log(loginData);
        setEmail("");
        setPassword("");

    }
  return (
    <div className="min-h-screen bg-stone-200 py-4 px-8 flex justify-center items-center">
    <div className="w-1/3  bg-white flex flex-col items-center rounded-2xl drop-shadow-lg">
        <h1 className="text-2xl font-bold text-stone-900 mt-3">Login:</h1>
        <form onSubmit={loginHandler} className="flex flex-col w-3/4 mx-auto my-5 gap-y-2" >
            <label>Email</label>
            <input value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="p-2 rounded-2xl focus:outline-none border-2 border-stone-900"  type="email" placeholder="email e.g. abc@gmail.com"/>
            <label>Password</label>
            <input
            value={password}
            onChange={(e)=>setPassword(e.target.value)} className="p-2 rounded-2xl focus:outline-none border-2 border-stone-900"  type="password" placeholder="password"/>
            <input className="my-2 p-2 rounded-2xl focus:outline-none bg-stone-900 text-stone-200"  type="submit" />
            <span className="text-stone-700 text-sm flex gap-x-2">New User go to <p className="text-red-500">Register</p></span>
        </form>
    </div>

</div>
  )
}

export default Login