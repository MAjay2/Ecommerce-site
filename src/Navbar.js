import React from "react"
import './index.css';
import { useContext } from "react";
import { loginContext } from "./LoginContext";
import Login from "./Login";
import Registration from "./Registration";
import {BrowserRouter as Router, Routes,Route,Link} from "react-router-dom";
import App from "./App";
import Cart from "./Cart";


export default function Navbar(){
    const {mickey}= useContext(loginContext)
    return(
        
        <div className="h-16 shadow-md">
        

        <div className="flex justify-between h-16 items-center ">
            <div>
                <h3 className="text-blue-900 font-bold ml-5"><span className="text-slate-900">Azubi</span> Frontend</h3>
            </div>

            <div>
                
            
                <ul className="flex ">
                <Link to="/" className="mx-3 text-blue-900 underline hover:underline-offset-4">Home</Link>
                <Link to="/cart" className="mx-3 text-stone-400 ">Cart</Link>
                </ul>
                
                
            
            
            </div>

            <div>
                <Link to="/Login" className="mr-5 bg-blue-900 text-white px-5 py-1 rounded animate-bounce hover:bg-blue-800">Login</Link>
            </div>

        </div>
        
        </div>
    )

}