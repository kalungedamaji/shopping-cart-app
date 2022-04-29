import { Content, getAll, update, ServiceResponse, ServiceRequest } from "../../../rest-client/RestClient";
import { CartProductDetail} from "../../../store/CartContext";


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

export function getAllCartItems(): Promise<AllCartItemsServiceResponse>{
   return getAll<AllCartItemsServiceResponse>("http://localhost:9000/customers/b4f5f670-269c-42d1-8753-89a212344c66/cart") ();
} 

export function updateCartItems(cartProductDetail: CartProductDetail){
    let serviceRequest: ServiceRequest<CartProductDetail>= {
        url: "http://localhost:9000/customers/b4f5f670-269c-42d1-8753-89a212344c66/cart/58a0c4f6-8405-4eb5-90b2-fe026e3610f2",
        body: cartProductDetail
    }
 update(serviceRequest) ();
}