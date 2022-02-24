import React, {useContext} from "react";
import product, {ProductDetails} from "../product/Product";
import CartContext from "./Cart-context";
interface AddProductProps{
    product : ProductDetails
}
 export const cartList : ProductDetails[] = [];
const AddProductToCart=(product:ProductDetails) =>{
    // const CartCtx = useContext(CartContext);
    // CartCtx.addToCart(product);
    cartList.push(product)
}

// const AddProductToCart:React.FC<AddProductProps> = ({product}) =>{
//     cartList.push(product)
//     return <div>hi add </div>
// }
export default AddProductToCart;
