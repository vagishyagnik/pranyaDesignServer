import { dimensionsInterface } from "../interfaces/dimensions";
import { Schema } from 'mongoose';
import { units } from "../interfaces/unitsEnum";

export const dimensions = new Schema<dimensionsInterface>({
    length: {type: Number, required: false},
    breadth: {type: Number, required: false},
    height: {type: Number, required: false},
    unit: {type: String, enum: units, required: true}
})