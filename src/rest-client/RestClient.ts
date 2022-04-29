import axios from "axios";
import { ProductDetail } from "../components/product-store/Product";
import { CartProductDetail } from "../store/CartContext";

export interface Links{
    rel: string;
    href: string;
}
export interface Content{
    links: Links[];
}
export interface ServiceResponse{
    links: Links[];
}
export interface ServiceRequest<T>{
    url: string;
    requestBody: T;
}
export function getAll<Type> (url: string): () => Promise<Type>{
    return async(): Promise<Type> =>{
        const response = await axios
        .get<Type>(url, {
            headers: {
                "Content-Type": "application/json"
            },
        });
        return response.data;
}
}
export function create<Type ,T> (serviceRequest: ServiceRequest<T>): ()=> Promise<Type>{

    return async(): Promise<Type> =>{
        const response = await axios
        .post<Type>(serviceRequest.url, serviceRequest.requestBody ,{
            headers: {
                "Content-Type": "application/json"
            },
        });
        return response.data;
    }
}
export function update<T>(serviceRequest: ServiceRequest<T>): () => Promise<void>{
    return async(): Promise<void> =>{
        const response = await axios
        .put(serviceRequest.url, serviceRequest.requestBody, {
            headers: {
                "Content-Type": "application/json"
            },
        });
        console.log(response.data);
    }
}