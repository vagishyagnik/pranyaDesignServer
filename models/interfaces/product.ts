import { categoryInterface } from "./category"
import * as enums from "./helperEnums"
import { dimensionsInterface } from "./dimensions"
import { units } from "./unitsEnum";
import internal from "stream";

export interface productInterface {
    productTitle: string,
    MRP: number,
    sellingPrice: number,
    shippingCharges: number,
    category: categoryInterface,
    description?: string,
    shippingInfo: string,
    returnInfo: string,
    careInstructions: string,
    saleable: enums.saleable,
    status: enums.status,
    size?: string,
    dimensions?: dimensionsInterface,
    weight?: units,
    color?: string,
    style?: string,
    inStock: number
}