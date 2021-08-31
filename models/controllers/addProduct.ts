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

    console.log(req.body);
    let saleableValue: String = req.body["saleable"]
    saleableValue.toLowerCase()
    let saleableBool: Boolean = false;
    if(saleableValue == "yes") saleableBool = true 

    let statusValue: String = req.body["status"]
    statusValue.toLowerCase()
    let statusData: Boolean = false
    if(statusValue == "draft") statusData = true

    let dimensionsVal: dimensionsInterface = {
        length: (req.body["length"])? Number(req.body["length"]): null,
        breadth: (req.body["breadth"])? Number(req.body["breadth"]): null,
        height: (req.body["height"])? Number(req.body["height"]): null,
        unit: req.body["units"]
    }

    let weightValue: numericValueInterface
    if(req.body["weight"]) weightValue = {
        value: Number(req.body["weight"]),
        unit: units.gm
    }

    let category: categoryInterface = {
        categoryClass: req.body["category"]
    }

    let data: productInterface = {
        productTitle: req.body["productTitle"],
        MRP: Number(req.body["MRP"]),
        imageUrl: req.body["imageUrl"],
        sellingPrice: Number(req.body["sellingPrice"]),
        shippingCharges: Number(req.body["shippingCharges"]),
        category: category,
        description: (req.body["description"])? req.body["description"]: null,
        shippingInfo: req.body["shippingInfo"],
        returnInfo: req.body["returnInfo"],
        careInstructions: req.body["careInstructions"],
        saleable: (saleableBool == true)? saleable.saleable: saleable.notSaleable,
        status: (statusData == true)? status.draft: status.publish,
        size: (req.body["size"])? req.body["size"]: null,
        dimensions: dimensionsVal,
        weight: (req.body["weight"])? weightValue: null,
        color: (req.body["color"])? req.body["color"]: null,
        style: (req.body["style"])? req.body["style"]: null,
        inStock: (req.body["inStock"])? Number(req.body["inStock"]): null
    }
    productSchema.create(data).then((status)=>{
        res.status(200).send("Product pushed to Database")
    }).catch((err)=>{
        console.log("Error : " + err)
        res.status(400).send("Something broke, Error: " + err)
    })
})

export default route





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