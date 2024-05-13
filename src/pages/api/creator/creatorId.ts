import cors from "@/helper/cors";
import { connectDB } from "@/helper/connectDB";
import { NextApiRequest, NextApiResponse } from "next";
import { CreatorModel } from "../../../models/creator.schema";
import { CommentType } from "@/utils/types";
import { getCreator } from "../../../service/creator";
import { getPostByCreatorId } from "@/service/post";
import { getCommentsByPostId } from "@/service/comment";
import { getPatrons } from "@/service/patron";
import { Patron } from "@/models/patron.schema";
import { get } from "http";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectDB();

  const { creatorId } = req.body;
  try {
    const patrons = await getPatrons();
    const posts = await getPostByCreatorId(creatorId);
    const creator = await getCreator(creatorId);
    res.status(200).json({ creator, posts });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
}
