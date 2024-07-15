import express from 'express';
import { addToCart, addToWishlist } from '../controller/cartController.js';

const router = express.Router();

router.route('/cart').post(addToCart)
router.route('/wishlist').post(addToWishlist)

export default router