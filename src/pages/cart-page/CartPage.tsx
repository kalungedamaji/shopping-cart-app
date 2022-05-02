import React, { useState } from 'react'
import CartList from '../../components/cart/CartList'
import CartPageHeader from './header/CartPageHeader';
import HomePageHeader from '../../components/main-header/HomePageHeader';
import {ButtonWrapper} from "./CartPage.style";

const CartPage:React.FC = (() => {

    const [rendered , renderCartList] = useState<boolean>(false);
    console.log("inCartPage", rendered)

    function setRenderedCartList() {
        console.log("in cartPage render phase:", rendered)
     renderCartList(!rendered)
}

    function routeChangePaymentPage() {
    }

    return (
       <div>
           <HomePageHeader homePageName="Meta Mart"></HomePageHeader>
           <CartPageHeader cartPageName='Your Shopping Cart'/>
           <CartList setRenderedCartList={setRenderedCartList}/>
           <ButtonWrapper>
           <button onClick={routeChangePaymentPage}>Proceed To Buy</button>
           </ButtonWrapper>
       </div>
    )
})

export default CartPage