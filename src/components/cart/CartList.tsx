import { Grid } from "@material-ui/core";
import React, { useContext } from "react";
import CartContext, { CartProductDetail } from "../../store/CartContext";
import Cart from "./CartItem";

interface CartListProps{
  setRenderedCartList: ()=>void
}

const CartList: React.FC<CartListProps> = ({setRenderedCartList}) => {
  const cartCtx = useContext(CartContext);
  
  if (cartCtx.cartProductList.length === 0) {
    return <h3>Your Cart is Empty !!</h3>;
  }
  return (
    
    <Grid container spacing={4} direction="column">
      {cartCtx.cartProductList.map((cartProductDetail: CartProductDetail) => (
        <Grid item key={cartProductDetail.name} xs={12} sm={8} md={8} lg={8}>
        <Cart cartProductDetail={cartProductDetail} setRenderedCartList={setRenderedCartList} key={cartProductDetail.name} />
        </Grid>
      ))}
    </Grid>
   
  );
}

export default CartList;
