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

    console.log(req.body)
    let data: Partial<productInterface> = {}
    // let data = {}

    if(!req.body["saleable"]) res.status(400).send('Item Sale info not mentioned')
    let saleableValue: String = req.body["saleable"]
    saleableValue.toLowerCase()
    data["saleable"] = saleable.notSaleable
    if(saleableValue == "yes") data.saleable = saleable.saleable 

    if(!req.body["status"]) res.status(400).send('Item publish status not mentioned')
    let statusValue: String = req.body["status"]
    statusValue.toLowerCase()
    data.status = status.publish
    if(statusValue == "draft") data.status = status.draft

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

    if(!req.body["category"]) res.status(400).send("Product Category field not mentioned")
    let category: categoryInterface = {
        categoryClass: req.body["category"]
    }
    data.category = category

    if(!req.body["productTitle"]) res.status(400).send("Product Title not mentioned")
    data.productTitle = req.body["productTitle"]

    if(!req.body["MRP"]) res.status(400).send("MRP not mentioned")
    data.MRP = Number(req.body["MRP"])

    if(!req.body["imageUrl"]) res.status(400).send("Image Url not mentioned")
    data.imageUrl = req.body["imageUrl"]

    if(!req.body["sellingPrice"]) res.status(400).send("Selling Price not mentioned")
    data.sellingPrice = Number(req.body["sellingPrice"])

    if(req.body["description"]) data.description = req.body["description"]

    if(!req.body["shippingCharges"]) res.status(400).send("Shipping Charges not mentioned")
    data.shippingCharges = Number(req.body["shippingCharges"])

    if(!req.body["shippingInfo"]) res.status(400).send("Shipping Info not mentioned")
    data.shippingInfo = req.body["shippingInfo"]

    if(!req.body["returnInfo"]) res.status(400).send("Return Info not mentioned")
    data.returnInfo = req.body["returnInfo"]

    if(!req.body["careInstructions"]) res.status(400).send("Care Instructions not mentioned")
    data.careInstructions = req.body["careInstructions"]

    if(!req.body["size"]) res.status(400).send("Size not mentioned")
    data.size = req.body["size"]

    if(!req.body["color"]) res.status(400).send("Colour not mentioned")
    data.color = req.body["color"]

    if(!req.body["style"]) res.status(400).send("Art Style not mentioned")
    data.style = req.body["style"]

    if(!req.body["inStock"]) res.status(400).send("Stock left not mentioned")
    data.inStock = Number(req.body["inStock"])

    productSchema.create(data).then((status)=>{
        res.status(200).send("Product pushed to Database")
    }).catch((err)=>{
        console.log("Error : " + err)
        res.status(400).send("Something broke, Error: " + err)
    })
})

export default route




// let data: productInterface = {
//     productTitle: req.body["productTitle"],
//     MRP: Number(req.body["MRP"]),
//     imageUrl: req.body["imageUrl"],
//     sellingPrice: Number(req.body["sellingPrice"]),
//     shippingCharges: Number(req.body["shippingCharges"]),
//     description: (req.body["description"])? req.body["description"]: null,
//     shippingInfo: req.body["shippingInfo"],
//     returnInfo: req.body["returnInfo"],
//     careInstructions: req.body["careInstructions"],
//     size: (req.body["size"])? req.body["size"]: null,
//     color: (req.body["color"])? req.body["color"]: null,
//     style: (req.body["style"])? req.body["style"]: null,
//     inStock: (req.body["inStock"])? Number(req.body["inStock"]): null
// }
// route.get('/',async (req,res)=>{
//     let accReqList
//     let compReqList
//     let paymentsList
//     if(req.session.passport != undefined){
//         accReqList = await requests.find(
//         {
//             promoterUsername: req.session.passport.user.username,
//             status : "Accept"
//         })
//         compReqList = await requests.find(
//         {
//             promoterUsername: req.session.passport.user.username,
//             status : "Complete"
//         })
//         paymentsList = await payments.find(
//         {
//             promoterUsername: req.session.passport.user.username
//         })
//     }
//     res.render('../public/business/index.hbs',{accReqList, compReqList, paymentsList});
// })