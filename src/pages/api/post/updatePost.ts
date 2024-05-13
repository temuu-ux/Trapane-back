import { connectDB } from "@/helper/connectDB";
import { NextApiResponse, NextApiRequest } from "next";
import { updatePost } from "@/service/post";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDB();

  try {
    const {
      _id,
      creatorId,
      title,
      bodyText,
      imageURL,
      videoURL,
      likes,
      contentType,
      comments,
    } = req.body;
    console.log("update post 123423t56y455432456", req.body);
    const updatedPost = await updatePost(_id, {
      creatorId,
      title,
      bodyText,
      imageURL,
      videoURL,
      likes,
      contentType,
      updatedAt: new Date(),
      createdAt: new Date(),
      comments,
    });
    res.status(200).json("post update successfully");
  } catch (error) {
    res.status(500).json(error);
  }
};

export default handler;
