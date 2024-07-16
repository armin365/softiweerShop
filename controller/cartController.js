import ProductModel from "../models/productsModel.js";
import UserModel from "../models/userModel.js";

export const addToCart = async(req,res)=>{
    try {
        const{userId, productId}= req.body;
      const product = await ProductModel.findById(productId);
      let user = await UserModel.findById(userId).populate("cart.product").populate("wishlist.product");

      if (user.cart.length == 0) {
        user.cart.push({product, quantity:1})
        
      }else{
       let isProductFound = false;
       for (let index = 0; index < user.cart.length; index++) {
        if (user.cart[index].product._id.equals(product._id)) {
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
        user.cart.push({product, quantity:1})
       }
      }
      user =await user.save();
      res.status(200).json(user)

    } catch (e) {
        res.status(500).json({ Error: e.message })
    }
}


export const addToWishlist = async(req,res)=>{
    try {
        const{userId, productId}= req.body;
      const product = await ProductModel.findById(productId);
      let user = await UserModel.findById(userId).populate("cart.product").populate("wishlist.product");

      if (user.wishlist.length == 0) {
        user.wishlist.push({product,})
        
      }else{
       let isProductFound = false;
       for (let index = 0; index < user.wishlist.length; index++) {
        if (user.wishlist[index].product._id.equals(product._id)) {
            isProductFound= true;
            
        }
        
       }
       if(isProductFound){
        res.status(400).json({message: "Already added"})
       }
       else{
        user.wishlist.push({product})
       }
      }
      user = await user.save();
      res.status(200).json(user)

    } catch (e) {
        res.status(500).json({ Error: e.message })
    }
}

export const removecartItem = async(req,res)=>{
  try {
      const{userId, productId}= req.body;
    const product = await ProductModel.findById(productId);
    let user = await UserModel.findById(userId).populate("cart.product").populate("wishlist.product");

    for (let index = 0; index < user.cart.length; index++) {
      if (user.cart[index].product._id.equals(product._id)) {
        if (user.cart[index].quantity == 1) {
          user.cart.splice(index,1)
        }else{
          user.cart[index].quantity--;
        }
      }
      
    }
    user = await user.save();
    res.status(200).json(user)

  } catch (e) {
      res.status(500).json({ Error: e.message })
  }
}

export const deletecartItem = async(req,res)=>{
  try {
      const{userId, index}= req.body;

    let user = await UserModel.findById(userId).populate("cart.product").populate("wishlist.product");
   if (user) {
    user.cart.splice(index,1);
   }
    user = await user.save();
    res.status(200).json(user)

  } catch (e) {
      res.status(500).json({ Error: e.message })
  }
}

export const deleteWishlisttItem = async(req,res)=>{
  try {
      const{userId, index}= req.body;

    let user = await UserModel.findById(userId).populate("cart.product").populate("wishlist.product");
   if (user) {
    user.wishlist.splice(index,1);
   }
    user = await user.save();
    res.status(200).json(user)

  } catch (e) {
      res.status(500).json({ Error: e.message })
  }
}