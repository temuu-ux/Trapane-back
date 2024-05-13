import cors from "@/helper/cors";
import { NextApiRequest, NextApiResponse } from "next";
import { getCommentsByPostId } from "@/service/comment";
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { postId } = req.body;
    const comments = await getCommentsByPostId(postId);
    res.status(200).json({ comments: comments });
  } catch (error) {
    res.status(500).json(error);
  }
};
export default handler;
