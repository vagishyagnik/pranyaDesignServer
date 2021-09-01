import * as exp from "express";
import { productSchema } from '../schema/productSchema'
const route = exp.Router()

route.get('/',(req,res)=>{
    if(!req.body["_id"]) {
        res.status(400).send("Product Id not present")
        return;
    }
    let productId = req.body["_id"]
    productSchema.findByIdAndDelete(productId).then(()=>{
        res.status(200).send('Product '+ productId +' deleted succesfully')
        return
    })
})

export default route