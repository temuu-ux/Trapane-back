import { TierType } from "@/utils/types";
import { NextApiRequest, NextApiResponse } from "next";
// import { Tier } from "../../models/tier.schema";
import { updateTier } from "@/service/tier";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { creatorId, title, desc, imageURL, price } = req.body;
  const updatedTier: TierType = { creatorId, title, desc, imageURL, price };
  try {
    const upDatedTier = await updateTier(creatorId, updatedTier);
    res.status(200).json(upDatedTier);
  } catch (error) {
    res.status(500).json({ error });
  }
}
