import mongoose from "mongoose";
import ratingSchema from "./ratingsModel.js";

const productSchema = mongoose.Schema({
    name:{
        type: String, 
        required: true,
    },
    image:{
        type: String, 
        required: true,
    },
    category:{
        type: String, 
        required: true,
    },
    description:{
        type: String, 
        required: true,
    },
    price:{
        type: Number, 
        required: true,
    },
    oldprice:{
        type: Number, 
        required: true,
    },
    countInStore:{
        type: Number, 
        required: true,
    },
    rating:{
        type: Number, 
        required: true,
        default:0
    },
    ratings:[ratingSchema]

})

const ProductModel = mongoose.model('products',productSchema)

export default ProductModel