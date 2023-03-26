import React from "react"
import Navbar from "./Navbar"
import {Link} from "react-router-dom"
import Registration from "./Registration"
import { Formik, useFormik, validateYupSchema } from "formik"
import * as Yup from "yup" 
import { useNavigate } from "react-router-dom"

export default function Login(){
    const navigate=useNavigate();
    const formik = useFormik({
        initialValues:{
            email:"",
            password:"",
        },
        validationSchema:Yup.object({
            email:Yup.string().email("Invalid email address").required("Required"),
            password:Yup.string().required("Password is required"),

        }),
        onSubmit:(values)=>{
            const loggedIn=JSON.parse(localStorage.getItem("userInfo"))
            if(values.email===loggedIn.email && values.password===loggedIn.password)
            {
                navigate("/")
            } else{
                alert("Password and email do not match")
            }
        
        }

    })

    return(
        <>
         <div className="flex justify-between mt-5">
           <div>
            <p className="text-sky-700 ml-5">Azubi<span className="text-slate-800">Shop</span></p>
            </div> 

            <div className="flex">
                <p className="mr-8">New to AzubiShop ?</p>
                <Link to="/registration" className="mr-8 bg-gray-200 border rounded text-center w-44 h-8">Create an Account</Link>
            </div>
        </div> 

        <div className="mt-20 flex flex-col items-center content-center  ">
            <h1 className="mb-5 text-xl">Sign In</h1>
            <form className=" flex flex-col mt-10 " onSubmit={formik.handleSubmit}>
                <label htmlFor="email"> Email Address</label>
                <input id="email" name="email" className="w-72 h-12 bg-gray-200 rounded  p-6 " type="email" onChange={formik.handleChange}/>
                {formik.errors.email ? <p className="text-rose-600">{formik.errors.email}</p>:null}

                <label htmlFor="password" >Password</label>
                <input className="w-72 h-12 bg-gray-200 rounded p-6  " id="password" name="password" type="password" onChange={formik.handleChange}/>
                {formik.errors.password?<p className="text-rose-600">{formik.errors.password}</p>:null}
                <button type="submit" className="w-72 mt-5 h-12 bg-blue-900 text-white  rounded animate-bounce hover:bg-blue-800"> Sign In</button>
            </form>
        </div>
            

        </>
    )
}