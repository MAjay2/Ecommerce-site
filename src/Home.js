import React from 'react';
import { CartState } from './CartContext';
import SearchBar from './Searchbar';
import CardList from './CardList';

function Home() {
  // get the state from the cart context
  const { state } = CartState();

  // log the state to the console
  console.log(state);

  // render the search bar and cart list components
  return (
    <div className=''>
      <SearchBar products={state.products} />
      <CardList products={state.products} />
    </div>
  );
}
export default Home;
