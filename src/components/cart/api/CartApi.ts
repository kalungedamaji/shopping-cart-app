import {
    Content,
    create,
    getAll,
    remove,
    ServiceRequest,
    ServiceResponse,
    update
} from "../../../rest-client/RestClient";
import { CartProductDetail } from "../../../store/CartContext";

export interface CartItemsContent extends ServiceResponse{
    id: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
}
export interface CartItemContent extends Content{
    id: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
}

export interface AllCartItemsServiceResponse extends ServiceResponse{
content: CartItemContent[];
}

export function getAllCartItems(customerId: string): Promise<AllCartItemsServiceResponse>{
   return getAll<AllCartItemsServiceResponse>("http://localhost:9000/customers/"+customerId+"/cart") ();
} 

export function createCartItem(cartItem: CartProductDetail): Promise<CartItemsContent>{
      let serviceRequest: ServiceRequest<CartProductDetail>={
       url: "http://localhost:9000/customers/"+cartItem.customerId+"/cart",
       requestBody: cartItem
      }
    return create<CartItemsContent, CartProductDetail>(serviceRequest) ();
 } 
export function updateCartItems(cartProductDetail: CartProductDetail){
    let serviceRequest: ServiceRequest<CartProductDetail>= {
        url: "http://localhost:9000/customers/"+cartProductDetail.customerId+"/cart/"+cartProductDetail.id,
        requestBody: cartProductDetail
    }
 return update(serviceRequest) ();
}
export function removeCartItem(cartProductDetail: CartProductDetail){
    console.log(cartProductDetail.customerId+"  "+cartProductDetail.id)
    remove("http://localhost:9000/customers/"+cartProductDetail.customerId+"/cart/"+cartProductDetail.id) ();
}
