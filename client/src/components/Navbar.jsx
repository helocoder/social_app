import { useState } from "react";
import { BsSearch ,BsPersonCircle} from "react-icons/bs";

const Navbar = () => {
    const [status,setStatus] = useState(false);
    const [search,setSearch] = useState("");
    return(
        <div className="grid grid-cols-3 gap-5 w-4/5 mx-auto my-2 drop-shadow-lg mb-2 h-20 items-center bg-stone-800
        rounded-2xl">
            <div className="pl-4">
                <h1 className="text-3xl text-white font-bold">Socializer</h1>
            </div>

            <div className="flex items-center rounded-2xl drop-shadow-lg bg-stone-200 border-sky-50 ">
                <BsSearch className="text-xl mx-2 text-stone-900"/>
                <input value={search} onChange={(e)=>setSearch(e.target.value)} className="focus:outline-none bg-stone-200 p-2" type="text"
                placeholder="Search for posts" />
            </div>

            <div className="person flex justify-end items-center border-none">
                <button onClick={()=>setStatus(!status)} className="px-4 py-2 mr-8 bg-stone-500 text-stone-200 font-bold rounded-2xl drop-shadow-md hover:drop-shadow-none">
                    {status?"Log Out":"LogIn"}</button>
             <BsPersonCircle className="text-2xl mr-8 text-stone-200 hover:text-red-500 
             hover:cursor-pointer"/>
            </div>
        </div>
    )
}
export default Navbar;