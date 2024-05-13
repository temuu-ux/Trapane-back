import cors from "@/helper/cors";
import { NextApiRequest, NextApiResponse } from "next";
import { createComment } from "@/service/comment";
import { CommentType } from "@/utils/types";
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    await cors(req, res);
    try {
      const { postId, patronId, text } =
        req.body;                                                                                                                                                                                                                                     
      const comment: CommentType = {
        patronId,
        text,
        createdAt: new Date(),
        updatedAt: new Date(),
        likes:0,
      };
      const newComment: any = await createComment(postId,comment);
      res.status(200).json(newComment);
    }
    catch (error) {
      console.log(error);
      res.status(500).json(error)
    }
};
export default handler;