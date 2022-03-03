import React, { useContext, useState } from "react";
import CartContext, { CartProductDetail} from "../../store/CartContext";
import Swal from 'sweetalert2';

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
    cartProductDetail.quantity = quantity+1;
    setQuantity(quantity+1);
    console.log("quantity is incremented")
}

function decrementHandler() {
  cartProductDetail.quantity = quantity-1;
  if(cartProductDetail.quantity === 0){

      Swal.fire({
          title: 'Are you sure?',
          text: 'Item will be removed from the cart',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes!'
      }).then((result) => {
          if(result.isConfirmed){
              cartCtx.removeItemsFromCart(cartProductDetail);
              setRenderedCartList();
          }
      })
  }
  else
  setQuantity(quantity-1);
  console.log("quantity is decremented")
}

function removeItemHandler() {
  cartCtx.removeItemsFromCart(cartProductDetail);
  setRenderedCartList();
    cartCtx.removeItemsFromCart(cartProductDetail);
    setRenderedCartList();
}
  

    return (
      <div>
        <h3>{cartProductDetail.name}</h3>
        <img src={cartProductDetail.image} alt={cartProductDetail.name} />
        <p>Price : {cartProductDetail.price}</p>
        <button onClick={decrementHandler}>-</button>
        <p>Quantity : {cartProductDetail.quantity}</p>
        <button onClick={incrementHandler} disabled={cartProductDetail.quantity === 10 ? true : false}>+</button>
        <p>Total : {cartProductDetail.price * cartProductDetail.quantity}</p>
        <button onClick={removeItemHandler}>Remove</button>
      </div>
  );
};

export default Cart;



