import express from 'express';
import { addToCart, addToWishlist, deletecartItem, deleteWishlisttItem, removecartItem, getCartproducts } from '../controller/cartController.js';

const router = express.Router();

router.route('/get').get(getCartproducts)
router.route('/cart').post(addToCart)
router.route('/wishlist').post(addToWishlist)
router.route('/removeCartItem').post(removecartItem)
router.route('/deleteCartItem').post(deletecartItem)
router.route('/deleteWishlistItem').post(deleteWishlisttItem)


export default router