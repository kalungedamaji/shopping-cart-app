import {fireEvent, render, screen} from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom';
import CartPage from '../../../pages/cart-page/CartPage';
import CartContext, { CartProductDetail } from '../../../store/CartContext';
import { CartContextType } from '../../../store/CartContext';


const testProduct:CartProductDetail[] = [{
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_DEPI4N9XwG1K7nZb8LG-6VoUgNi-y9IlOg&usqp=CAU",
    name:"Mens Casual Premium Slim Fit T-Shirts",
    price: 22.3,
    quantity: 2
}];

function removeItemHandler(product: CartProductDetail) {
    testProduct.forEach((cartItem, index) => {
        if(cartItem.name === product.name) 
           testProduct.splice(index, 1);
      })
}


const mockContext:CartContextType = {
    cartProductList: testProduct,
    addItemsInCart: () => {},
    removeItemsFromCart: removeItemHandler
}



const MockCart:React.FC = () => {
    return (
        <BrowserRouter>
        <CartContext.Provider value={mockContext} >
            <CartPage />
        </CartContext.Provider>
        </BrowserRouter>
      )
  }

describe("User should increase or decrease quantity of cart item", () => {


    it("should increase the value of quantity by 1 when increment button is clicked", () => {
        render(<MockCart />);
        const incrementButtonElement = screen.getByRole('button', {name:"+"});

        fireEvent.click(incrementButtonElement);
        const productQuantityElement = screen.getByText("Quantity : 3")

        expect(productQuantityElement).toBeInTheDocument();
    })


    it("should decrease the value of quantity by 1 when decrement button is clicked",()=>{

        render(<MockCart />);
        const decrementButtonElement = screen.getByRole('button', {name:"-"});

        fireEvent.click(decrementButtonElement);
        const productQuantityElement = screen.getByText("Quantity : 1")

        expect(productQuantityElement).toBeInTheDocument();
    })

    it("should have the increment limit of quantity equal to 10 ", () => {
        render(<MockCart />);
        const incrementButtonElement = screen.getByRole("button", {name:"+"});
    
        let count = 2;
        while(count !== 10) {
        fireEvent.click(incrementButtonElement);
        count++;
        }

        fireEvent.click(incrementButtonElement)
        const productQuantityElement = screen.getByText("Quantity : 10")
        
        expect(productQuantityElement).toBeInTheDocument();
    })

    it("should delete the element from cart when quantity is set to 0",()=>{
        render(<MockCart/>)
        const decrementButtonElement = screen.getByRole('button', {name:"-"});

        fireEvent.click(decrementButtonElement);
        const productNameElement = screen.getByText("Mens Casual Premium Slim Fit T-Shirts")

        expect(productNameElement).toBeInTheDocument();
    })

})

describe("User has ability to remove item from cart", () => {

    it("should remove item from cart when remove button is clicked", () => {

        render(<MockCart />);
        const removeButtonElement = screen.getByRole("button", {name: "Remove"});

        fireEvent.click(removeButtonElement)
        const cartEmptyElement = screen.getByRole("heading", {name: "Your Cart is Empty !!"})

        expect(cartEmptyElement).toBeInTheDocument();

    })
})

