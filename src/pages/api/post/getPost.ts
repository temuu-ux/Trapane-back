import { connectDB } from "@/helper/connectDB";
import { NextApiRequest, NextApiResponse } from "next";
import { getPostByCreatorId } from "@/service/post";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectDB();

  const { creatorId } = req.body;

  try {
    const posts = await getPostByCreatorId(creatorId);
    res.status(200).json({ posts });
  } catch (error) {
    res.status(500).json({ error });
  }
}
