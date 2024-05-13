import { CategoryType } from "@/utils/types";
import { Category } from "@/models/category.schama";
import { connectDB } from "@/helper/connectDB";
import { NextApiRequest, NextApiResponse } from "next";


export const createCategory = async (category: CategoryType) => {
  await connectDB();
try { 
  const newCategory = await Category.create(category);
  return newCategory;
} catch (error) {
  throw error;
}
};

export const getCategories = async () => {
  await connectDB();
  try {
    const categories = await Category.find();
    return categories;
  } catch (error) {
    throw error;
  }
    
};
export const getCategory = async (id: string) => {
  await connectDB();
  try {
    const category = await Category.findById(id);
    return category;
  } catch (error) {
    throw error;
  }
    
};
export const updateCategory = async (id: string, category: CategoryType) => {
  await connectDB();
  try {
    const updatedCategory = await Category.findByIdAndUpdate(id, category);
    return updatedCategory;
  } catch (error) {
    throw error;
  }
    
};
export const deleteCategory = async (id: string) => {
  await connectDB();
  try {
    const deletedCategory = await Category.findByIdAndDelete(id);
    return deletedCategory;
  } catch (error) {
    throw error;
  }
    
};              