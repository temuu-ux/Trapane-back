import { connectDB } from "@/helper/connectDB";

import { NextApiRequest, NextApiResponse } from "next";
import { getCreator } from "@/service/creator";
import { getPostByCreatorId } from "@/service/post";
import {
  checkSubscription,
  getSubscriptionCount,
} from "@/service/subscription";
import { getTierByCreatorId } from "@/service/tier";
import { getPatrons } from "@/service/patron";
import jwt from "jsonwebtoken";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectDB();

  const { creatorId } = req.body;
  console.log("ggggg", creatorId);
  try {
    let decodedCreatorId: string | null = null;
    if (creatorId) {
      const decoded = jwt.verify(creatorId, process.env.JWT_SECRET || "");
      decodedCreatorId = typeof decoded === "string" ? decoded : decoded.id;
    }

    if (!decodedCreatorId) {
      return res.status(401).json({ error: "Invalid creatorId" });
    }

    const creator = await getCreator(decodedCreatorId);
    const patron = await getPatrons();
    const posts = await getPostByCreatorId(decodedCreatorId);
    const tiers = await getTierByCreatorId(decodedCreatorId);
    const subscriptionCount = await getSubscriptionCount(decodedCreatorId);

    res.status(200).json({ creator, posts, tiers, subscriptionCount });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
}
