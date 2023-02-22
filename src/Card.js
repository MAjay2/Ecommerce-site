import React from "react";
import './index.css' 



export default function Card(props){
    return(
        <div className="">
          

            <section className="m-10">
                <div className="pt-4 pb-8 w-72 h-96 shadow-lg   ">
                    <img src={props.img} className="my-0 mx-auto w-64 h-60 border"/>
                    <h5 className="mt-1 ml-3">{props.name}</h5>
                    <p className="mt-1 ml-3">{props.description}</p>

                    <div className="flex mt-1">
                        <button className="ml-3 bg-blue-900 text-white px-5 py-1 rounded ">Place Order</button>
                        <p className="ml-3">{props.price}</p>
                    </div>
                </div>

            </section>
            
        </div>
    )
}