import React from 'react'



export default function Nav({activeTab,onTabChange,cart}) {
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
                    {cart.length} items ()
                </li>
            </ul>

        </nav>
    )
}