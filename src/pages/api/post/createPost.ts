import { connectDB } from "@/helper/connectDB";
import cors from "@/helper/cors";
import { createPost } from "@/service/post";
import { PostType } from "@/utils/types";
import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

interface jwtPayload {
  id: string;
  iat: number;
  exp: number;
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectDB();

  console.log("post req recieved");
  try {
    const postData = req.body;
    const {
      creatorId,
      title,
      bodyText,
      imageURL,
      videoURL,
      likes,
      contentType,
    } = postData;
    const decodedCreatorId: jwtPayload | any = jwt.verify(
      creatorId,
      process.env.JWT_SECRET || ""
    );
    console.log("decodedCreatorId", decodedCreatorId);
    const post: PostType = {
      creatorId: decodedCreatorId.id,
      title: title,
      bodyText: bodyText,
      imageURL: imageURL,
      videoURL: videoURL,
      createdAt: new Date(),
      updatedAt: new Date(),
      likes: likes,
      contentType: contentType,
      comments: [],
    };

    const newPost = await createPost(post);
    res
      .status(200)
      .json({ post: newPost, message: "New post created successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
}
export default handler;
