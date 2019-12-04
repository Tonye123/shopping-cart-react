import React from 'react'



export default function Nav({activeTab,onTabChange,cartTotal}) {
    const itemClass = tabName => `App-nav-item ${activeTab === tabName ? 'selected' : ''}`
    return (
        <nav className="App-nav">
            <ul>
                <li className={itemClass('items')}>
                    <button onClick={()=>onTabChange('items')}>Items</button>
                </li>
                <li className={itemClass('cart')}>
    <button onClick={()=>onTabChange('cart')}>Cart<sup className="App-Nav-Sup">{cartTotal}</sup></button>
                </li>
            </ul>

        </nav>
    )
}