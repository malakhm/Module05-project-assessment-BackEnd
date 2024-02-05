const Schema = mongoose.Schema
import mongoose from "mongoose"

const Products = new Schema(
    {
        name:
        {
            type: String,
            required: true
        },
        description:
        {
            type: String,
            required: true
        },

        image:
        {
            type:String,
            required: true
        
        },
        price:
        {
            type: Number,
            required: true

        }
       
         
    

    })

    
export default mongoose.model('Product', Products)