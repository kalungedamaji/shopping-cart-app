import React, { useState } from 'react'
import CartList from '../../components/cart/CartList'

const HomePage:React.FC = (() => {

    const [rendered , renderCartList] = useState<boolean>(false);
    console.log("inCartPage", rendered)

    function setRenderedCartList(){
     renderCartList(!rendered)
}


    return (
       <div>
           <h1>Your Shopping Cart</h1>
           <CartList setRenderedCartList={setRenderedCartList}/>
       </div>
    )
})

export default HomePage