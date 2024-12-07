import { Document } from 'mongoose';

export interface Product extends Document {
  id?: string;
  name: string;
  description: string;
  price: number;
  weight: number;
  category: string;
  images: string[];
  createdAt: Date;
}
