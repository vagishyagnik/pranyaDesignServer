import * as exp from "express";
import { productSchema } from '../schema/productSchema'
import { productInterface } from "../interfaces/product"
import { categoryInterface } from '../interfaces/category'
import { saleable } from "../interfaces/helperEnums"
import { status } from "../interfaces/helperEnums"
import { dimensionsInterface } from "../interfaces/dimensions"
import { numericValueInterface } from "../interfaces/dimensions";
import { units } from "../interfaces/unitsEnum";
const route = exp.Router()


route.post('/',(req,res)=>{

    console.log('This is from updateProduct',req.body)
    if(!req.body["_id"]) {
        res.status(400).send("Product Id not present")
        return;
    }
    let productId = req.body["_id"]

    let data: Partial<productInterface> = {}

    if(req.body["saleable"]) {
        let saleableValue: String = req.body["saleable"]
        saleableValue.toLowerCase()
        data["saleable"] = saleable.notSaleable
        if(saleableValue == "yes") data.saleable = saleable.saleable 
    }

    if(req.body["status"]) {
        let statusValue: String = req.body["status"]
        statusValue.toLowerCase()
        data.status = status.publish
        if(statusValue == "draft") data.status = status.draft
    }

    if(req.body["length"] || req.body["breadth"] || req.body["height"]) {
        let dimensionsVal: dimensionsInterface = { "unit": null }
        if(req.body["length"]) dimensionsVal.length = Number(req.body["length"])
        if(req.body["breadth"]) dimensionsVal.breadth = Number(req.body["breadth"])
        if(req.body["height"]) dimensionsVal.height = Number(req.body["height"])
        if(req.body["units"]) {
            req.body["units"].toLowerCase()
            if(req.body["units"] == "centimeter" || req.body["units"] == "cm") dimensionsVal.unit = units.cm
            else dimensionsVal.unit = units.meter;
        }

        data.dimensions = dimensionsVal
    }
    
    if(req.body["weight"]) { 
        let weightValue: numericValueInterface
        weightValue = {
            value: Number(req.body["weight"]),
            unit: units.gm
        }
        data.weight = weightValue
    }

    if(req.body["category"]) {
        let category: categoryInterface = {
            categoryClass: req.body["category"]
        }
        data.category = category
    }

    if(req.body["productTitle"]) data.productTitle = req.body["productTitle"]

    if(req.body["MRP"]) data.MRP = Number(req.body["MRP"])

    if(req.body["imageUrl"]) data.imageUrl = req.body["imageUrl"]

    if(req.body["sellingPrice"])  data.sellingPrice = Number(req.body["sellingPrice"])

    if(req.body["description"]) data.description = req.body["description"]

    if(req.body["shippingCharges"]) data.shippingCharges = Number(req.body["shippingCharges"])

    if(req.body["shippingInfo"]) data.shippingInfo = req.body["shippingInfo"]

    if(req.body["returnInfo"]) data.returnInfo = req.body["returnInfo"]

    if(req.body["careInstructions"]) data.careInstructions = req.body["careInstructions"]

    if(req.body["size"]) data.size = req.body["size"]

    if(req.body["color"]) data.color = req.body["color"]

    if(req.body["style"]) data.style = req.body["style"]

    if(req.body["inStock"]) data.inStock = Number(req.body["inStock"])

    productSchema.findByIdAndUpdate(productId, data).then((data)=>{
        res.status(200).send(data)
    }).catch((err)=>{
        console.log("Error : " + err)
        res.status(400).send("Something broke, Error: " + err)
    })
})

export default route