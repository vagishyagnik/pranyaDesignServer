import * as exp from "express";
import { productSchema } from '../schema/productSchema'
const route = exp.Router()


route.get('/',(req,res)=>{
    let requiredParams = {
        productTitle: true,
        MRP: true,
        imageUrl: true,
        sellingPrice: true,
        category: true,
        inStock: true
    }
    productSchema.find({}).select(requiredParams)
    .then((status)=>{
        res.status(200).send(status)
    }).catch((err)=>{
        console.log("Error : " + err)
        res.status(400).send("Something broke, Error: " + err)
    })
})


route.get('/all',(req,res)=>{
    productSchema.find({})
    .then((status)=>{
        res.status(200).send(status)
    }).catch((err)=>{
        console.log("Error : " + err)
        res.status(400).send("Something broke, Error: " + err)
    })
})

export default route