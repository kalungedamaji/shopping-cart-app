import { Content, getAll, ServiceResponse } from "../../../rest-client/RestClient";

export interface ProductContent extends Content{
    id: string;
    name: string;
    price: number;
    image: string;
    description: string;
}

export interface AllProductsServiceResponse extends ServiceResponse{
    content: ProductContent[];
}

export function getAllProducts(): Promise<AllProductsServiceResponse>{
   return getAll<AllProductsServiceResponse>("http://localhost:9000/products") ();
} 