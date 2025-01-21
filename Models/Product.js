import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
     },
     price:{
        type:Number,
        required:[true,"Price must be there"],
     },
     rating:{
        type:Number,
        default:5,
     },
     company:{
        type:String,
     },
     image:{
        type:String,
        required:true
     }     
}) 

export const Product = mongoose.model("Productss",ProductSchema)