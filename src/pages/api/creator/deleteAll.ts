import cors from "@/helper/cors";
import { connectDB } from "@/helper/connectDB";
import { NextApiRequest, NextApiResponse } from "next";
import { deleteAllCreator } from "@/service/creator";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectDB();
  await cors(req, res);

  try {
    await deleteAllCreator();
    res.status(200).json({ message: "success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
}