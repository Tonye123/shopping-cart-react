import React, { useState } from 'react';
import Nav from './Nav';
import CartPage from './CartPage'
import './App.css';
import ItemPage from './ItemPage'
import { items } from './static-data'

function App() {
  const[activeTab, setActiveTab] = useState('items')
  const[cart, setCart] = useState([])

  const addToCart = (item) => {
    setCart((cart) => [
      ...cart,
    item])
    
  }

  return (
    <div className="App">
      <Nav 
       activeTab={activeTab}
       onTabChange={setActiveTab}/>
      <main className='App-content'>
        <Content tab={activeTab}
          onAddToCart = {addToCart} />
      </main>
   
    </div>
  );
}

const Content = ({ tab, onAddToCart }) =>  {
  switch(tab) {
    default:
    case'item':
      return <ItemPage items = {items} onAddToCart = {onAddToCart} />;
    case 'cart':
      return <CartPage items = {items} />;
   
    
  }
}

export default App;
