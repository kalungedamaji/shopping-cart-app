import axios from "axios";

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
    body: T;
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

export function update<T>(serviceRequest: ServiceRequest<T>): () => Promise<void>{
    return async(): Promise<void> =>{
        const response = await axios
        .put(serviceRequest.url, serviceRequest.body, {
            headers: {
                "Content-Type": "application/json"
            },
        });
        console.log(response.data);
    }
}