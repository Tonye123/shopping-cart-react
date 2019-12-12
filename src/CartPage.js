import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import './CartPage.css'
import { items } from './static-data';
import Nav from './Nav'


function CartPage({ items,onRemoveOne,onAddOne }) {
   
 
    return(
        <>
        { items.length === 0 ? <div className="CartPage-empty">Your Cart is empty.</div> :
        <ul className="CartPage-items">
            {items.map(item => 
                <li key={item.id} className="CartPage-item">
                    <Item item={item} >
                      <div className="CarItem-controls">
                        <button
                        className="CartItem-removeOne"
                        onClick={()=> onRemoveOne(item)}>-</button>
                        <span className="CartItem-count">{item.count}</span>
                        <button
                        className="CartItem-addOne"
                        onClick={()=> onAddOne(item)}>+</button>
                        <div className="total"><b>Total:</b>${item.count * item.price}</div>

                      </div>
                        
                    </Item>
                </li>)}

        </ul> }
       

        </>
    )

}

CartPage.propTypes = {
    items: PropTypes.array.isRequired,
    onAddOne: PropTypes.func.isRequired,
    onRemoveOne:PropTypes.func.isRequired
}


export default CartPage;