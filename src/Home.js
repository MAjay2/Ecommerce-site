import React from 'react'
import Navbar from './Navbar'
import Searchbar from './Searchbar'
import Card from './Card'
import Data from './Data'


function Home() {
    const dataElements = Data.map(items=>{
        return <Card
        key={items.id}
        name={items.name} 
        description={items.description}
        price={items.price}  
        img={items.imgUrl}
        />
})
  return (
    <div>
        <Navbar/>
        <Searchbar/>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
    {dataElements}
    </div>
        
    </div>
  )
}

export default Home