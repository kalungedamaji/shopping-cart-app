import { Content, create, getAll, ServiceRequest, ServiceResponse, update } from "../../../rest-client/RestClient";
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

export function getAllCartItems(customerId: string): Promise<AllCartItemsServiceResponse>{
   return getAll<AllCartItemsServiceResponse>("http://localhost:9000/customers/"+customerId+"/cart") ();
} 

export function createCartItem(cartItem: CartProductDetail): Promise<CartItemServiceResponse>{
      let serviceRequest: ServiceRequest<CartProductDetail>={
       url: "http://localhost:9000/customers/"+cartItem.customerId+"/cart",
       requestBody: cartItem
      }
    return create<CartItemServiceResponse, CartProductDetail>(serviceRequest) ();
 } 
export function updateCartItems(cartProductDetail: CartProductDetail){
    let serviceRequest: ServiceRequest<CartProductDetail>= {
        url: "http://localhost:9000/customers/"+cartProductDetail.customerId+"/cart/"+cartProductDetail.id,
        requestBody: cartProductDetail
    }
 update(serviceRequest) ();
}
