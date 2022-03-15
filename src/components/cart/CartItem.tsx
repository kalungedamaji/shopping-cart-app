import React, { useContext, useState } from "react";
import CartContext, { CartProductDetail} from "../../store/CartContext";
import Swal from 'sweetalert2';
import { ProductWrapper } from "./Cart.style";
import { Grid } from "@material-ui/core";

export interface CartProps {
  cartProductDetail: CartProductDetail;
  setRenderedCartList: ()=>void
}

const INITIAL_QUANTITY = 1;

const Cart: React.FC<CartProps> = ({ cartProductDetail, setRenderedCartList }) => {

 console.log("in cartItem", cartProductDetail);
  const cartCtx = useContext(CartContext);
  const [quantity, setQuantity] = useState(INITIAL_QUANTITY);

function incrementHandler() {
    cartProductDetail.quantity = cartProductDetail.quantity+1;
    setQuantity(cartProductDetail.quantity);
    setRenderedCartList();
    console.log("quantity is incremented")
}

function decrementHandler() {
  
  if(cartProductDetail.quantity === 1){
      Swal.fire({
        title: 'Are you sure?',
        text: 'Item will be removed from the cart',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes!',
        allowOutsideClick: false
    }).then((result) => {
        if(result.isConfirmed){
            cartCtx.removeItemsFromCart(cartProductDetail);
            setRenderedCartList();
            console.log("is confirmed clicked");
        }
    })
  }
  else {
  setQuantity(cartProductDetail.quantity);
  setRenderedCartList();
  cartProductDetail.quantity = cartProductDetail.quantity-1; 
  console.log("quantity is decremented")
  }
}

function removeItemHandler() {
  Swal.fire({
    title: 'Are you sure?',
    text: 'Item will be removed from the cart',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes!',
    allowOutsideClick: false
}).then((result) => {
    if(result.isConfirmed){
        cartCtx.removeItemsFromCart(cartProductDetail);
        setRenderedCartList();
    }
})
}

    return (
      
      <ProductWrapper>
      
      <div className="card"> 

        <div className="productImage">
        <img src={cartProductDetail.image} alt={cartProductDetail.name} />
        </div>


        <div className="productInfo">

          <h3>{cartProductDetail.name}</h3>
          <p>Price : {cartProductDetail.price}</p>

         <div className="quantity">
          <button onClick={decrementHandler} disabled={cartProductDetail.quantity === 0 ? true : false}>-</button>
          <p>Quantity : {cartProductDetail.quantity}</p>
          <button onClick={incrementHandler} disabled={cartProductDetail.quantity === 10 ? true : false}>+</button>
         </div>
          
          <div className="removeButton">
          <button onClick={removeItemHandler}>Remove</button>
          </div>
        </div>

        <div className="productPrice">
        <p className="AlignRight">Total : {cartProductDetail.price * cartProductDetail.quantity}</p>
        </div>

        </div>  
      </ProductWrapper>
      
  );
};

export default Cart;



