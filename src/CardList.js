import React from 'react';
import Card from './Card';
import Data from './Data';

function CardList({products}) {
    const cardList = products.map((item,index)=>(
        <Card item={item} key={item.id}/>
    ))
  return (
    <div className=' mt-10 ml-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 place-items-center'>
      {cardList}
    </div>
  )
}

export default CardList;