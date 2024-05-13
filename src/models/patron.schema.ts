import mongoose, { Schema, model } from "mongoose";

const PatronSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  profilePic: String,
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

export const Patron =
  mongoose.models.Patron || mongoose.model("Patron", PatronSchema);
