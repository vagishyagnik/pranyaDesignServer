import { units } from "./unitsEnum"

export interface dimensionsInterface {
    length?: number,
    breadth?: number,
    height?: number,
    unit: units
}

export interface numericValueInterface {
    value: number,
    unit: units
}