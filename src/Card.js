import React from 'react'
import { Link } from 'react-router-dom'
import { CartState } from './CartContext'
import Button from './Button'

// Card component receives an 'item' object as props
function Card({ item }) {
  return (
    <div className=' shadow-2xl w-[287px] mr-10 mb-10 mt-10 rounded-lg'>
      <div className=' '>
        <img className='rounded-t-lg' src={item.imgUrl} alt={item.name} />
      </div>

      <div className='card-content'>
        <h2>{item.title}</h2>
        <p>{item.body}</p>
      </div>

      <div className='card-footer'>
        {/* Link to the product page with the corresponding item id */}
        <Link to={`/product/${item.id}`}>
          <Button name='place order' />
        </Link>

        <span>$ {item.price}</span>
      </div>
    </div>
  )
}

export default Card;
