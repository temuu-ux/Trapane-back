import cors from "@/helper/cors";
import { NextApiRequest, NextApiResponse } from "next";
import { updateComment } from "@/service/comment";
import { CommentType } from "@/utils/types";
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    await cors(req, res);
    try {
      const { id, postId, patronId, text } =
        req.body;                                                                                                                                                                                                                                     
      const  updatedComment = await updateComment( postId,id, {  patronId, text, updatedAt: new Date(), createdAt: new Date(), likes: 0 });
      res.status(200).json(updatedComment);
    }
    catch (error) {
      res.status(500).json(error)
    }
};
export default handler;