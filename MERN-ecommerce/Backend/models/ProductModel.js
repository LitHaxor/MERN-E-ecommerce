import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: {type:String, required: true, unique: true},
    image: {type: String, required: true},
    brand: { type:String, required: true},
    category: { type:String, required: false},
    description: { type:String, required: true},
    price: { type:Number, required: true},
    stock: { type:Number, required: true},
    rating: { type:String, required: true},
    numReviews: { type:String, required: true},
}, {timestamps: true}

);

const Product = new mongoose.model('Product', productSchema);

export default Product;