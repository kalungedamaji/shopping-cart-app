import React, { useState } from 'react'
import CartList from '../../components/cart/CartList'
import CartPageHeader from '../../components/main-header/CartPageHeader';
import HomePageHeader from '../../components/main-header/HomePageHeader';

const CartPage:React.FC = (() => {

    const [rendered , renderCartList] = useState<boolean>(false);
    console.log("inCartPage", rendered)

    function setRenderedCartList() {
        console.log("in cartPage render phase:", rendered)
     renderCartList(!rendered)
}
    return (
       <div>
           <HomePageHeader homePageName="Meta Mart"></HomePageHeader>
           <CartPageHeader cartPageName='Your Shopping Cart'/>
           <CartList setRenderedCartList={setRenderedCartList}/>
       </div>
    )
})

export default CartPage