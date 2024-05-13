import cors from "@/helper/cors";
import { connectDB } from "@/helper/connectDB";
import { NextApiRequest, NextApiResponse } from "next";
import { deleteCreator } from "@/service/creator";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDB();
  await cors(req, res);
  try {
    const id = req.body._id;
    const deletedCreator = await deleteCreator(id);
    res.status(200).json("Creator delete successfully");
  } catch (error) {
    res.status(500).json(error);
  }
};

export default handler;
