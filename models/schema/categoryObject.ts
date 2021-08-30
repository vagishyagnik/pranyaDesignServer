import { categoryInterface } from "../interfaces/category";
import { Schema } from 'mongoose';

export const category = new Schema<categoryInterface>({
    categoryClass: {type: String, required: true}
})