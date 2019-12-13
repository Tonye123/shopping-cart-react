import React from 'react'



export default function Nav({activeTab,onTabChange,cart}) {
    let totalPrice = cart.reduce((accum,item)=> accum + (item.price * item.count),0)
    let totalCount = cart.reduce((accum,item)=> accum + item.count,0)
    const itemClass = tabName => `App-nav-item ${activeTab === tabName ? 'selected' : ''}`
    return (
        <nav className="App-nav">
            <ul>
                <li className={itemClass('items')}>
                    <button onClick={()=>onTabChange('items')}>Items</button>
                </li>
                <li className={itemClass('cart')}>
    <button onClick={()=>onTabChange('cart')}>Cart</button>
                </li>
                <li className= "App-nav-item cartSum">
                    {totalCount} items (${totalPrice})
                </li>
            </ul>

        </nav>
    )
}