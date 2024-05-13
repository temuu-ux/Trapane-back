import { PostType } from "@/utils/types";
import { Post } from "@/models/post.schama";
import { connectDB } from "@/helper/connectDB";
import { NextApiRequest, NextApiResponse } from "next";
import { Patron } from "@/models/patron.schema";

export const createPost = async (post: PostType) => {
  await connectDB();
  try {
    const newPost = await Post.create({ ...post });
    return newPost;
  } catch (error) {
    throw error;
  }
};

export const getPosts = async () => {
  await connectDB();
  try {
    const posts = await Post.find();
    return posts;
  } catch (error) {
    throw error;
  }
};
export const getPost = async (id: string) => {
  await connectDB();
  try {
    const post = await Post.findById(id);
    return post;
  } catch (error) {
    throw error;
  }
};
export const updatePost = async (id: string, post: PostType) => {
  await connectDB();
  try {
    const updatedPost = await Post.findByIdAndUpdate(id, post);
    return updatedPost;
  } catch (error) {
    throw error;
  }
};
export const deletePost = async (id: string) => {
  await connectDB();
  try {
    const deletedPost = await Post.findByIdAndDelete(id);
    return deletedPost;
  } catch (error) {
    throw error;
  }
};
export const getPostByCreatorId = async (creatorId: string) => {
  await connectDB();
  try {
    const posts = await Post.find({ creatorId }).populate({
      path: "comments.patronId",
      model: "Patron",
    });

    return posts;
  } catch (error) {
    throw error;
  }
};
