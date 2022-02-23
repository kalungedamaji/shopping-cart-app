import { createContext, useState } from "react";
import product, {ProductDetails} from "../product/Product";
interface CartContextType{
    cartList : ProductDetails[],
    addToCart(product: ProductDetails) :void
}
const cartList : ProductDetails[] = [];
const CartContext = createContext<CartContextType>({
    cartList,
    addToCart: (product) => {}
});

export function CartContextProvider(){
    const [userCartList, setUserCartList] = useState<ProductDetails[]>([]);

    function addToCartHandler(product:ProductDetails) {
        setUserCartList((prevUserCartList) =>{
            return prevUserCartList.concat(product)
        })
    };

    const context = {
        cartList: userCartList,
        addToCart: addToCartHandler
    }
    return <CartContext.Provider value={context}>
        {}
    </CartContext.Provider>
}
export default CartContext;