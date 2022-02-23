import { createContext, useState } from 'react'
import { ProductDetail } from '../product/Product';


interface CartContextProps {
    cartProductList : ProductDetail[],
    addItemsinCart : (product: ProductDetail) => void
}

const CartContext = createContext<CartContextProps>({
    cartProductList : [],
    addItemsinCart : (product: ProductDetail) => {}
    
});

export const CartContextProvider:React.FC = ((props) => {

    const [inCart, addToCart] = useState<ProductDetail[]>([]);


    function addItemsHandler(product : ProductDetail) {
        addToCart((prevProduct) => {
            return prevProduct.concat(product);
        });
    }


    const context:CartContextProps = {
        cartProductList: inCart,
        addItemsinCart: addItemsHandler
    }

    return (
    <CartContext.Provider value={context}>
        {props.children}
    </CartContext.Provider>
    )
})


export default CartContext;