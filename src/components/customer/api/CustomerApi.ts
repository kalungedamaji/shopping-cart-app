import { getResource, ServiceResponse} from "../../../rest-client/RestClient";

export interface CustomerServiceResponse extends ServiceResponse{
    id: string ;
    firstName: string ;
    lastName: string ;
    phoneNumber: string ;
    address: string ;
    emailId: string ;
    password: string;
}

export function getCustomer(customerId: string): Promise<CustomerServiceResponse> {
    return getResource<CustomerServiceResponse>("http://localhost:9000/customers/" + customerId )();
}