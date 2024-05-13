import mongoose, { Schema, model } from "mongoose";

const TierSchema = new mongoose.Schema({
  creatorId: { type: Schema.Types.ObjectId, ref: "Creator" },
  title: String,
  desc: String,
  imageURL: String,
  price: Number,
});

export const Tier = mongoose.models.Tier ||mongoose.model("Tier", TierSchema);
