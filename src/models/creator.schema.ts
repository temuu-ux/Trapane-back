import mongoose, { Schema, model } from "mongoose";

const CreatorSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  profilePic: String,
  coverPic: String,
  bio: String,
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
});

export const CreatorModel =mongoose.models.Creator || mongoose.model("Creator", CreatorSchema);
