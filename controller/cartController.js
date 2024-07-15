import ProductModel from "../models/productsModel.js";
import UserModel from "../models/userModel.js";

export const addToCart = async(req,res)=>{
    try {
        const{userId, productId}= req.body;
      const productToAdd = await ProductModel.findById(productId);
      let user = await UserModel.findById(userId).populate("cart.product").populate("wishlist.product");

      if (user.cart.length == 0) {
        user.cart.push({productToAdd, quantity:1})
        
      }else{
       let isProductFound = false;
       for (let index = 0; index < user.cart.length; index++) {
        if (user.cart[index].productToAdd._id.equals(productToAdd._id)) {
            isProductFound= true;
            
        }
        
       }
       if(isProductFound){
        let productInCart = user.cart.find(pro=>
            pro.product._id.equals(product._id)
        );
        productInCart.quantity++;
       }
       else{
        user.cart.push({productToAdd, quantity:1})
       }
      }
      user = user.save();
      res.status(200).json(user)

    } catch (e) {
        res.status(500).json({ Error: e.message })
    }
}


export const addToWishlist = async(req,res)=>{
    try {
        const{userId, productId}= req.body;
      const productToAdd = await ProductModel.findById(productId);
      let user = await UserModel.findById(userId).populate("cart.product").populate("wishlist.product");

      if (user.wishlist.length == 0) {
        user.wishlist.push({productToAdd,})
        
      }else{
       let isProductFound = false;
       for (let index = 0; index < user.wishlist.length; index++) {
        if (user.wishlist[index].productToAdd._id.equals(productToAdd._id)) {
            isProductFound= true;
            
        }
        
       }
       if(isProductFound){
        res.status(400).json({message: "Already added"})
       }
       else{
        user.wishlist.push({productToAdd})
       }
      }
      user = user.save();
      res.status(200).json(user)

    } catch (e) {
        res.status(500).json({ Error: e.message })
    }
}