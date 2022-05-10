
import {Content, getAll, ServiceResponse} from "../../../rest-client/RestClient";

export interface OrderItem{
    id: string;
    name: string;
    image: string;
    description: string;
    quantity: number;
    price: number;
}

export interface OrderContent extends Content{
    id: string;
    timestamp: string;
    orderPaymentType: string;
    orderPaymentStatus: string;
    orderStatus: string;
    orderItems: OrderItem[];
}

export interface AllOrdersServiceResponse extends ServiceResponse{
    content: OrderContent[];
}

export function getAllOrders(customerId: string): Promise<AllOrdersServiceResponse>{
    return getAll<AllOrdersServiceResponse>("http://localhost:9000/customers/"+customerId+"/orders") ();
}