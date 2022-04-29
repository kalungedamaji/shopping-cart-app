import { Content, create, getAll, ServiceRequest, ServiceResponse } from "../../../rest-client/RestClient";
import { CartProductDetail } from "../../../store/CartContext";
import { ProductDetail } from "../../product-store/Product";

export interface CartItemsContent extends Content{
    id: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
}

export interface AllCartItemsServiceResponse extends ServiceResponse{
    content: CartItemsContent[];
}

export interface CartItemServiceResponse extends ServiceResponse{
content: CartItemsContent;
}

export function getAllCartItems(): Promise<AllCartItemsServiceResponse>{
   return getAll<AllCartItemsServiceResponse>("http://localhost:9000/customers/b4f5f670-269c-42d1-8753-89a212344c66/cart") ();
} 

export function createCartItem(cartItem: CartProductDetail): Promise<CartItemServiceResponse>{
      let serviceRequest: ServiceRequest<CartProductDetail>={
       url: "http://localhost:9000/customers/b4f5f670-269c-42d1-8753-89a212344c66/cart",
       requestBody: cartItem
      }
    return create<CartItemServiceResponse, CartProductDetail>(serviceRequest) ();
 } 
