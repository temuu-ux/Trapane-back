import cors from "@/helper/cors";
import { connectDB } from "@/helper/connectDB";
import { NextApiResponse, NextApiRequest } from "next";

import { getSubscription } from "@/service/subscription";
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDB();

  try {
    const id = req.body.id;
    const subscription = await getSubscription(id);
    res.status(200).json(subscription);
  } catch (error) {
    res.status(500).json(error);
  }
};
export default handler;
