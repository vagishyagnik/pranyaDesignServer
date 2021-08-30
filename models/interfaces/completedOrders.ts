import { customerInterface } from "./customer"
import { paymentPermitted } from "./helperEnums"

export interface compeltedOrders {
    orderId: number,
    customer: customerInterface,
    price: number,
    orderDate: Date,
    paymentType: paymentPermitted,
    invoice: string
}