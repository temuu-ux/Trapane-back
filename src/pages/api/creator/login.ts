import cors from "@/helper/cors";
import { connectDB } from "@/helper/connectDB";
import { NextApiRequest, NextApiResponse } from "next";
import { LoginCreator } from "@/service/creator";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDB();
  await cors(req, res);
  try {
    const { email, password } = req.body;
    const token = await LoginCreator(email, password);
    res.status(200).json({ token: token, message: "Login Successful" });
  } catch (error) {
    res.status(500).json(error);
  }
};

export default handler;
