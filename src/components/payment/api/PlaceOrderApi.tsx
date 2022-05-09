import {Content, create, ServiceRequest, ServiceResponse} from "../../../rest-client/RestClient";

export interface OrderItems{
    id: string;
    name: string;
    image: string;
    description: string;
    quantity: number;
    price: number;
}
export interface PlaceOrderContent extends Content{
    id: string;
    timestamp: string;
    orderPaymentType: string;
    orderPaymentStatus: string;
    orderStatus: string;
    orderItems: OrderItems[];
}
export interface PlaceOrderServiceResponse extends ServiceResponse{
    content: PlaceOrderContent;
}
export interface PlaceOrderDetails{
    paymentType: string;
}
export function placeOrder(paymentType: PlaceOrderDetails, customerId: string | undefined): Promise<PlaceOrderServiceResponse>{
    let serviceRequest: ServiceRequest<PlaceOrderDetails>={
        url: "http://localhost:9000/customers/"+customerId+"/pay",
        requestBody: paymentType
    }
    return create<PlaceOrderServiceResponse, PlaceOrderDetails>(serviceRequest)();
}
