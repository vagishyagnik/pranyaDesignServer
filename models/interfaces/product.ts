import { categoryInterface } from "./category"
import * as enums from "./helperEnums"
import { dimensionsInterface } from "./dimensions"
import { units } from "./unitsEnum";
import { numericValueInterface } from "./dimensions";

export interface productInterface {
    productTitle: string,
    MRP: number,
    imageUrl: string,
    sellingPrice: number,
    shippingCharges: number,
    category: categoryInterface,
    description?: string,
    shippingInfo: string,
    returnInfo: string,
    careInstructions: string,
    saleable: enums.saleable,
    status: enums.status,
    dimensions?: dimensionsInterface,
    weight?: numericValueInterface,
    color?: string,
    style?: string,
    inStock: number
}