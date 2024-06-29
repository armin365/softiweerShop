import ProductModel from './../models/productsModel.js'

export const getproducts = async (req, res) => {
    try {
        const products = await ProductModel.find()
        res.status(200).json(products)
    } catch (e) {
        res.status(500).json({ Error: e.message })
    }
}

export const getproductById = async (req, res) => {
    try {
        const product = await ProductModel.findById(req.params.id)
        if (product) {
            res.status(200).json(product)
        }
    } catch (e) {
        res.status(500).json({ Error: e.message })
    }
}

export const createProduct = async (req, res) => {
    try {
        const { name, image, category, description, price, oldprice, countInStore, } = req.body
        const product = await ProductModel.create({ name, image, category, description, price, oldprice, countInStore })
        if (product) {
            res.status(201).json(product)
        }
    } catch (e) {
        res.status(500).json({ Error: e.message })
    }
}

export const updateProduct = async (req, res) => {
    try {
        const { name, image, category, description, price, oldprice, countInStore, } = req.body
        const product = await ProductModel.findById(req.params.id)

        if (product) {
            product.name = name
            product.image = image
            product.category = category
            product.description = description
            product.price = price
            product.oldprice = oldprice
            product.countInStore = countInStore

            const updatedProduct = await product.save()
            if(updatedProduct){
                res.status(201).json(updatedProduct)
            }
        }
        else {
            res.status(500).json({ message: "Product not found!" })
        }
    } catch (e) {
        res.status(500).json({ Error: e.message })
    }
}

export const deleteproduct = async (req, res) => {
    try {
        const product = await ProductModel.findByIdAndDelete(req.params.id)
        if (product) {
            res.status(200).json({message: "Product deleted"})
        }
    } catch (e) {
        res.status(500).json({ Error: e.message })
    }
}