import React, { useState } from 'react'
import CartList from '../../components/cart/CartList'
import CartPageHeader from '../../components/main-header/CartPageHeader';

const CartPage:React.FC = (() => {

    const [rendered , renderCartList] = useState<boolean>(false);
    console.log("inCartPage", rendered)

    function setRenderedCartList(){
     renderCartList(!rendered)
}

    return (
       <div>
           <CartPageHeader cartPageName='Your Shopping Cart'/>
           <CartList setRenderedCartList={setRenderedCartList}/>
       </div>
    )
})

export default CartPage