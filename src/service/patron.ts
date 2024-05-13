import { PatronType } from "@/utils/types";
import { Patron } from "@/models/patron.schema";
import { connectDB } from "@/helper/connectDB";
import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

export const createPatron = async (patron: PatronType) => {
  await connectDB();
  try {
    const newPatron = await Patron.create(patron);
    return newPatron;
  } catch (error) {
    throw error;
  }
};

export const getPatrons = async () => {
  await connectDB();
  try {
    const patrons = await Patron.find();
    return patrons;
  } catch (error) {
    throw error;
  }
};
export const getPatron = async (id: string) => {
  await connectDB();
  try {
    const patron = await Patron.findById(id);
    return patron;
  } catch (error) {
    throw error;
  }
};
export const updatePatron = async (id: string, patron: PatronType) => {
  await connectDB();
  try {
    const updatedPatron = await Patron.findByIdAndUpdate(id, patron);
    return updatedPatron;
  } catch (error) {
    throw error;
  }
};
export const deletePatron = async (id: string) => {
  await connectDB();
  try {
    const deletedPatron = await Patron.findByIdAndDelete(id);
    return deletedPatron;
  } catch (error) {
    throw error;
  }
};
export const LoginPatron = async (email: string, password: string) => {
  await connectDB();
  try {
    const patron = await Patron.findOne({ email });
    if (patron.password === password) {
      const token = jwt.sign({ id: patron.id }, process.env.JWT_SECRET || "LLL", {
        expiresIn: "1h",
      });
      return token;
    } else {
      throw new Error("Invalid password");
    }
  } catch (error) {
    throw error;
  }
};
