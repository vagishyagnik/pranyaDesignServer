import { Schema, model } from 'mongoose';
import { administrator } from "../interfaces/administrators"

const schema = new Schema<administrator>({
    name:  {type: String, required: true},
    emailId: {type: String, required: true}
})

export const administratorSchema = model<administrator>('Administrator', schema);