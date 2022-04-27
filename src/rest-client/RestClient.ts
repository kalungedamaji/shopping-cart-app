import axios, { AxiosResponse } from "axios";

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
