import { Schema } from 'mongoose';

export const ProductSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  weight: { type: Number, required: true },
  category: { type: String, required: true },
  images: { type: [String], required: true },
  createdAt: { type: Date, default: Date.now },
});
