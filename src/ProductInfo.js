import React from 'react';
import Data from './Data';

import { useParams } from 'react-router-dom'; // Import the 'useParams' hook from the 'react-router-dom' module
import { CartState } from './CartContext'; // Import the 'CartState' context from the './CartContext' module

function ProductInfo() { // Define the 'ProductInfo' component
  const { id } = useParams(); // Extract the 'id' parameter from the route using the 'useParams' hook
  const { state: { products, cart }, dispatch } = CartState(); // Retrieve the 'products' and 'cart' state variables from the 'CartState' context using destructuring assignment

  const product = products.find(item => item.id === id); // Find the product with the given 'id' in the 'products' array
  const cartItem = cart?.some(i => i.id === `${product.id}`); // Check if the product is already in the cart

  console.log(cart); // Log the current contents of the cart
  console.log(product.id); // Log the ID of the current product

  const handleAddCart = () => { 
    dispatch({
      type: 'ADD_TO_CART',
      payload: product,
    });
  };

  const handleRemoveCart = () => { 
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: product.id,
    });
  };

  return ( 
    <div className="product-container">
      {product && ( 
        <div className="product-image">
          <img src={product.imgUrl} alt={product.title} /> 
        </div>
      )}
      <div className="product-content">
        {product && ( 
          <>
            <h1>{product.title}</h1>
            <p>{product.body}</p>
            <span>$ {product.price}</span>
            {cart.some(p => p.id === id) ? ( 
              <button className="btn btn-danger" onClick={handleRemoveCart}>
                Remove from cart
              </button>
            ) : ( 
              <button className="btn" onClick={handleAddCart}>
                Add to cart
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default ProductInfo;
