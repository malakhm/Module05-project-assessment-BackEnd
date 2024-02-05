import express from 'express';
import {upload} from '../config/cloudinary.js'
import Product from '../Controllers/productController.js'
import Verification from '../Middleware/jwt.js'

const productRouter=express.Router();


productRouter.get('/',Product.getAllProducts)
productRouter.get('/:id',Product.getSingleProduct)
productRouter.post('/',Verification.verifyAdmin,upload.single('image'),Product.createProduct)
productRouter.put('/:id',Verification.verifyAdmin,upload.single('image'),Product.editProduct)
productRouter.delete('/:id', Verification.verifyAdmin,Product.deleteProduct)




export default productRouter