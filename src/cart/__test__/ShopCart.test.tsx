import {render , screen} from '@testing-library/react'
import { ProductDetails } from '../../product/Product'

describe("Testing Cart of Shopping Cart Application", () => {
    
    it("should render product in Cart", () => {

        const inputProduct: ProductDetails = {
        image : " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_DEPI4N9XwG1K7nZb8LG-6VoUgNi-y9IlOg&usqp=CAU",
        name : "Laptop bag",
        description : "Your perfect pack for everday",
        price : "INR 4000"} 

        render(<ShopCart product={inputProduct}/>)

        const actualProduct = screen.getRoleBy("heading", {name:"Laptop bag"})
        expect(actualProduct).toBeInTheDocument();
        
    })
})