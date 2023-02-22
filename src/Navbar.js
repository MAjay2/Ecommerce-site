import React from "react"
import './index.css';

export default function Navbar(){
    
    return(
        <div className="h-16 shadow-md">
        <div className="flex justify-between h-16 items-center ">
            <div>
                <h3 className="text-blue-900 font-bold ml-5"><span className="text-slate-900">Azubi</span> Frontend</h3>
            </div>

            <div>
                <ul className="flex ">
                    <li className="mx-3 text-blue-900 underline hover:underline-offset-4"><a href="#">Home</a></li>
                    <li className="mx-3 text-stone-400"><a href="#">About</a></li>
                    <li className="mx-3 text-stone-400"><a href="#">Contact</a></li>
                    <li className="mx-3 text-stone-400 "><a href="#">Cart</a></li>

                </ul>
            </div>

            <div>
                <button className="mr-5 bg-blue-900 text-white px-5 py-1 rounded animate-bounce hover:bg-blue-800">Login</button>
            </div>

        </div>
        </div>
    )

}