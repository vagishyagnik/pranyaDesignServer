import { customerInterface } from "../interfaces/customer";
import { Schema } from 'mongoose';

export const customer = new Schema<customerInterface>({
    name: {type: String, required: true},
    authId: {type: String, required: true},
    contactNumber: {type: Number, required: false},
    emailId: {type: String, required: false},
    residentialAddress: {type: String, required: false}
})