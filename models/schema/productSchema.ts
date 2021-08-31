import { Schema, model } from 'mongoose';
import { productInterface } from "../interfaces/product"
import { category } from './categoryObject';
import { dimensions } from "./dimensionsObject"
import { numericValue } from './dimensionsObject'
import * as enums from "../interfaces/helperEnums"

const schema = new Schema<productInterface>({
    productTitle:  {type: String, required: true},
    imageUrl: {type: String, required: true},
    MRP: {type: Number, required: true},
    sellingPrice: {type: Number, required: true},
    shippingCharges: {type: Number, required: true},
    category: {type: category, required: true},
    description: {type: String, required: false},
    shippingInfo: {type: String, required: true},
    returnInfo: {type: String, required: true},
    careInstructions: {type: String, required: true},
    saleable: {type: String, enum: enums.saleable,required: true},
    status: {type: String, enum: enums.status,required: true},
    size: {type: String, required: false},
    dimensions: {type: dimensions, required: false},
    weight: {type: numericValue, required: false},
    color: {type: String, required: false},
    style: {type: String, required: false},
    inStock: {type: Number, required: true}
})

export const productSchema = model<productInterface>('Products', schema);