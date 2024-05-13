import cors from "@/helper/cors";
import { connectDB } from "@/helper/connectDB";
import { NextApiResponse, NextApiRequest } from "next";
import { checkSubscription } from "@/service/subscription";
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDB();

  try {
    const { patronId, creatorId } = req.body;
    const subscription = await checkSubscription(patronId, creatorId);
    res.status(200).json(subscription);
  } catch (error) {
    res.status(500).json(error);
  }
};
export default handler;
