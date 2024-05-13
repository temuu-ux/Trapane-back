import cors from "@/helper/cors";
import { TierType } from "@/utils/types";
import { connectDB } from "@/helper/connectDB";
import { NextApiRequest, NextApiResponse } from "next";
// import { Tier } from "../../models/tier.schema";
import { createTier } from "@/service/tier";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { creatorId, title, desc, imageURL, price } = req.body;
  const newTier = { creatorId, title, desc, imageURL, price };
  try {
    const tier = await createTier(newTier);
    res.status(201).json(tier);
  } catch (error) {
    res.status(500).json({ error });
  }
}
