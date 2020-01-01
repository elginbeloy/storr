import mongoose from 'mongoose';
const {Schema} = mongoose;

const productSchema = new Schema(
  {
    name: String,
    imageURL: String,
    category: String,
    price: String,
    discountPrice: String,
    description: String,
    defaultColor: String,
    colorsAvailable: String,
    brand: String,
    brandUrl: String,
    comment: [String],
    currentRating: Number,
  },
  {
    toJSON: {virtuals: true},
    toObject: {virtuals: true},
  },
);

export const Product = mongoose.model('Product', productSchema);
