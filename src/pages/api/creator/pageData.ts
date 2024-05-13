import cors from "@/helper/cors";
import { connectDB } from "@/helper/connectDB";
import { NextApiRequest, NextApiResponse } from "next";
import { getCreatorByName } from "../../../service/creator";
import { getPostByCreatorId } from "@/service/post";
import {
  checkSubscription,
  getSubscriptionCount,
} from "@/service/subscription";
import { getTierByCreatorId } from "@/service/tier";
import { getPatrons } from "@/service/patron";
import jwt from "jsonwebtoken";
interface jwtPayload {
  id: string;
  iat: number;
  exp: number;
}

interface jwtPayload {
  id: string;
  iat: number;
  exp: number;
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectDB();
  await cors(req, res);

  const { creatorName, patronId } = req.body;
  const decodedPatronId: jwtPayload | any = jwt.verify(
    patronId,
    process.env.JWT_SECRET || ""
  );
  console.log("decodedPatronId", decodedPatronId);
  const { id } = decodedPatronId;
  try {
    const creator = await getCreatorByName(creatorName);
    const patron = await getPatrons();
    const creatorId = creator._id;
    const posts = await getPostByCreatorId(creatorId);
    const tiers = await getTierByCreatorId(creatorId);
    const subscriptions = await checkSubscription(id, creatorId);
    const subscriptionCount = await getSubscriptionCount(creatorId);
    res
      .status(200)
      .json({ creator, posts, tiers, subscriptions, subscriptionCount });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
}
