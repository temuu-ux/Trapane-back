import mongoose, { Schema, model } from 'mongoose';

const CategorySchema = new mongoose.Schema({
  name: String,
  desc: String,
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

export const Category =mongoose.models.Category || mongoose.model('Category', CategorySchema);