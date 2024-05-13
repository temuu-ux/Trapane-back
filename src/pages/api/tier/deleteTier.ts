import cors from "@/helper/cors";
import { TierType } from "@/utils/types";
import { connectDB } from "@/helper/connectDB";
import { NextApiRequest, NextApiResponse } from "next";
// import { Tier } from "../../models/tier.schema";
import { deleteTier } from "@/service/tier";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.body;
  try {
    const deletedTier = await deleteTier(id);
    res.status(200).json(deletedTier);
  } catch (error) {
    res.status(500).json({ error });
  }
}
