import { connectDB } from "@/helper/connectDB";
import { NextApiRequest, NextApiResponse } from "next";
import { deletePost } from "@/service/post";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectDB();

  try {
    const id = req.body._id;

    const deletedPost = await deletePost(id);
    res.status(200).json("post deleted");
  } catch (error) {
    res.status(500).json(error);
  }
}
