import { CommentType } from "@/utils/types";
import { connectDB } from "@/helper/connectDB";
import { NextApiRequest, NextApiResponse } from "next";
import { Post } from "@/models/post.schama";

export const createComment = async (postId: string, comment: CommentType) => {
  await connectDB();
  try {
    console.log(comment);
    const post = await Post.findById(postId);
    if (!post) {
      throw new Error("Post not found");
    }
    console.log(post);
    post.comments.push(comment);
    await post.save();
    console.log("log func", post.comments);
    return post.comments[post.comments.length - 1];
  } catch (error) {
    throw error;
  }
};

export const getCommentsByPostId = async (postId: string) => {
  await connectDB();
  try {
    console.log("getCommentsByPostId", postId);
    const post = await Post.findById(postId).populate("comments.patronId");
    return post.comments;
  } catch (error) {
    throw error;
  }
};

export const updateComment = async (
  postId: string,
  commentId: string,
  comment: CommentType
) => {
  await connectDB();
  try {
    const post = await Post.findById(postId);
    if (!post) {
      throw new Error("Post not found");
    }
    const commentIndex = post.comments.findIndex(
      (c: any) => c._id.toString() === commentId
    );
    if (commentIndex === -1) {
      throw new Error("Comment not found");
    }
    post.comments[commentIndex] = {
      ...post.comments[commentIndex],
      ...comment,
    };
    await post.save();
    return post.comments[commentIndex];
  } catch (error) {
    throw error;
  }
};

export const deleteComment = async (postId: string, commentId: string) => {
  await connectDB();
  try {
    const post = await Post.findById(postId);
    if (!post) {
      throw new Error("Post not found");
    }
    post.comments = post.comments.filter(
      (c: any) => c._id.toString() !== commentId
    );
    await post.save();
    return true;
  } catch (error) {
    throw error;
  }
};
