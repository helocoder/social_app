import { useState } from "react";
import {BsPersonFill } from "react-icons/bs";

const Friend = () => {
    const [follow,setFollow] = useState(true);
    return(
        <div className="flex justify-between h-20 p-6 rounded-2xl items-center  bg-stone-50">
            <div className="flex gap-x-4 items-center">
            <BsPersonFill className="text-4xl rounded-full bg-stone-500 p-2"/>
                  <h3 className="font-bold text-lg">Utkarsh Shukla</h3>
            </div>
                 
                  <button className="px-3 py-2 border-none bg-stone-800 text-stone-100 drop-shadow-lg rounded-2xl flex justify-end" onClick={()=>setFollow(!follow)}>
                    {follow?"Unfollow":"Follow"}</button>
        </div>
    )
}
export default Friend;