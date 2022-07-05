import { useState } from "react";
import { BsSearch,BsPersonFill } from "react-icons/bs";

const Navbar = () => {
    const [auth,setAuth] = useState(false);
    const [search,setSearch] = useState("");
    return(
        <div className="grid text-stone-200 grid-cols-3 w-4/5 mx-auto bg-stone-800 rounded-2xl items-center justify-between h-20">
            <div className="ml-4">
                <h1 className="font-bold text-3xl">Socializer</h1>
            </div>

            <div className="bg-stone-200 flex rounded-2xl p-2">
                <BsSearch className="text-stone-900 text-2xl mx-2"/>
                <input value={search}
                onChange={(e)=>setSearch(e.target.value)} type="text" className="bg-stone-200 focus:outline-none text-stone-900" />
            </div>

            <div className="flex justify-end mr-4 items-center">
                <button className=" px-4 py-2 rounded-2xl bg-stone-200 text-stone-900 border-none font-bold hover:bg-red-500" 
                onClick={()=>setAuth(!auth)}>{auth?"Log Out":"Log In"}</button>
                <BsPersonFill className="text-stone-200 text-2xl mx-3"/>
            </div>
        </div>
    )
}
export default Navbar;