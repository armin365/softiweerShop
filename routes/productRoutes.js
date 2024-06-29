import express from 'express'
import { createProduct, deleteproduct, getproductById, getproducts, updateProduct } from '../controller/productController.js';

const Productrouter = express.Router();

Productrouter.route('/get').get(getproducts)
Productrouter.route('/get/:id').get(getproductById)
Productrouter.route('/post').post(createProduct)
Productrouter.route('/update/:id').put(updateProduct)
Productrouter.route('/delete/:id').delete(deleteproduct)

export default Productrouter
