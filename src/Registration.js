import React from "react";
import {json, Link} from "react-router-dom"
import Login from "./Login";
import { useFormik } from "formik";
import * as Yup from "yup";


export default function Registration(){
    const formik = useFormik({
        initialValues:{
            email:"",
            password:"",
            confirmPassword:"",

            
        },
        validationSchema:Yup.object({
            email:Yup.string().email("Invalid email address").required("Required"),
            password:Yup.string().required("Password is required"),
            confirmPassword:Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
        }),

        onSubmit:(values)=>{

            localStorage.setItem("userInfo",JSON.stringify(values))
        }
    })
    console.log(formik.values)

    return(
        
          <>
         <div className="flex justify-between mt-5">
           <div>
            <p className="text-sky-700 ml-5">Azubi<span className="text-slate-800">Shop</span></p>
            </div> 

            <div className="flex">
                <p className="mr-8">Already have an account ?</p>
                <Link to="/login" className="mr-8 bg-gray-200 border text-center  rounded w-44 h-8">Sign in</Link>
            </div>
        </div> 

        <div className="mt-20 flex flex-col items-center content-center  ">
            <h1 className="mb-5 text-xl">Create an account</h1>
            <form className=" flex flex-col mt-10  " onSubmit={formik.handleSubmit}>
                <label htmlFor="email"className="mt-4"> Email Address</label>
                <input className="w-72 h-12 bg-gray-200 rounded  p-6 "id="email" name="email" type="email" onChange={formik.handleChange}
                    value={formik.values.email}/>
                    {formik.errors.email ? <p className="text-rose-600">{formik.errors.email}</p>:null}

                <label className="mt-4" htmlFor="password">Password</label>
                <input className="w-72 h-12 bg-gray-200 rounded p-6  " id="password" name="password" type="password" onChange={formik.handleChange}
                    value={formik.values.password}/>
                    {formik.errors.password?<p className="text-rose-600">{formik.errors.password}</p>:null}

                <label className="mt-4" htmlFor="password">Confirm Password</label>
                <input className="w-72 h-12 bg-gray-200 rounded p-6  "  id="confirmPassword"name="confirmPassword" type="password" onChange={formik.handleChange}
                    value={formik.values.confirmPassword}/>
                    {formik.errors.confirmPassword?<p className="text-rose-600">{formik.errors.confirmPassword}</p>:null}
                <button type="submit" className="w-72 mt-5 h-12 bg-blue-900 text-white  rounded animate-bounce hover:bg-blue-800"> Sign In</button>
            </form>
        </div>
            

        </>
        
    )
}