import cors from "@/helper/cors";
import { connectDB } from "@/helper/connectDB";
import { NextApiResponse, NextApiRequest } from "next";
import { getSubscriptions } from "@/service/subscription";
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDB();

  try {
    const subscriptions = await getSubscriptions();
    res.status(200).json({ subscriptions: subscriptions });
  } catch (error) {
    res.status(500).json(error);
  }
};
export default handler;
