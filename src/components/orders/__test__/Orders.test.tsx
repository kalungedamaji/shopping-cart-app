import {render, screen} from "@testing-library/react";
import Order, {OrderDetail} from "../Order";

it('should display order id', () => {
    const order:OrderDetail ={
        id: "7c186a22-a18f-4625-946c-94aca03f06bf",
        orderPaymentStatus: "COMPLETED",
        orderPaymentType: "COD",
        orderStatus: "COMPLETED",
        timestamp: "2022-05-04T06:05:35.911Z",
        orderItems: [
            {
                "id": "fac1daa5-1ff7-4241-b14f-90413fdbeb17",
                "name": "Glass",
                "image": "image",
                "description": "",
                "quantity": 5,
                "price": 10.00
            },
            {
                "id": "1421ebb3-f413-4f8a-803e-da91078fe6c8",
                "name": "Cup",
                "image": "image",
                "description": "",
                "quantity": 5,
                "price": 10.00
            }
        ]
    }
    render(<Order orderDetail={order}/>);
    const idElement = screen.getByText("7c186a22-a18f-4625-946c-94aca03f06bf");
    expect(idElement).toBeInTheDocument();
});