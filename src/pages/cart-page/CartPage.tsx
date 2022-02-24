import React from 'react'
import CartList from '../../components/cart/CartList'

const HomePage:React.FC = (() => {
    return (
       <div>
           <h1>Your Shopping Cart</h1>
           <CartList />
       </div>
    )
})

export default HomePage