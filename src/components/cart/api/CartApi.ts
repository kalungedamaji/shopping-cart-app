import { Content, getAll, ServiceResponse } from "../../../rest-client/RestClient";

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