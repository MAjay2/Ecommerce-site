import React from "react"
import './index.css';
import Navbar from "./Navbar";
import Card from "./Card";
import data from "./data (1)"
import Searchbar from "./Searchbar";


function App() {
  const dataElements = data.map(items=>{
    return <Card
    name={items.name} 
    description={items.description}
    price={items.price}  
    img={items.imgUrl}
    />
  }
    
  )

 
  return(
    <div>
    <Navbar/>
    <Searchbar/>
    <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
    {dataElements}
    </div>
  </div>
  )

}

export default App;
