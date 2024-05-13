import mongoose, { Schema, model, mongo } from "mongoose";
const CommentSchema = new mongoose.Schema({
  patronId: {
    type: Schema.Types.ObjectId,
    ref: "Patron",
  },
  text: {
    type: String,
    default: "",
  },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
  likes: {
    type: Number,
    default: 0,
  },
});
const PostSchema = new mongoose.Schema({
  creatorId: {
    type: Schema.Types.ObjectId,
    ref: "Creator",
  },
  tierId: {
    type: Schema.Types.ObjectId,
    ref: "Tier",
  },
  title: String,
  bodyText: String,
  imageURL: String,
  videoURL: String,
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
  likes: [String],
  contentType: {
    type: String,
    enum: ["text", "image", "video"],
  },
  comments: [
    {
      patronId: {
        type: Schema.Types.ObjectId,
        ref: "Patron",
      },
      text: {
        type: String,
        default: "",
      },
      createdAt: { type: Date, default: Date.now() },
      updatedAt: { type: Date, default: Date.now() },
      likes: {
        type: Number,
        default: 0,
      },
    },
  ],
});
export const Post = mongoose.models.Post || mongoose.model("Post", PostSchema);
