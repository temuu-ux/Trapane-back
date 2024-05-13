import { NextApiRequest, NextApiResponse } from "next";
import { deleteComment } from "@/service/comment";
import { CommentType } from "@/utils/types";
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { postId, commentId } = req.body;
    const deletedComment = await deleteComment(postId, commentId);
    res.status(200).json(deletedComment);
  } catch (error) {
    res.status(500).json(error);
  }
};
export default handler;
