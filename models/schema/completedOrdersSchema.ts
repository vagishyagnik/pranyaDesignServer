import { Schema, model } from 'mongoose';
import { compeltedOrders } from "../interfaces/completedOrders"
import { customer } from "./customerObject" 
import { paymentPermitted } from '../interfaces/helperEnums'

const schema = new Schema<compeltedOrders>({
    orderId: {type: Number, required: true},
    customer: {type: customer, required: true},
    price: {type: Number, required: true},
    orderDate: {type: Date, required: true},
    paymentType: {type: String, enum: paymentPermitted, required: true},
    invoice: {type: String, required: true}
})

export const administratorSchema = model<compeltedOrders>('Completed-Orders', schema);