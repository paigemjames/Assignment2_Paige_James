import { Int32 } from 'mongodb';
import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    //trim: true,
    required: 'Name is required'},
  description: {
    type: String,
    trim: true},
  price: {
    type: Number,
    required: 'Price is required'
  },
  quantity: {
    type: Number
  },
  category: {
    type: String,
    enum: [ "Men", "Women", "Teen" ],
    description: "Must be eithe Men, Women, or Teen"

  }
});

export default mongoose.model('Product', productSchema)

