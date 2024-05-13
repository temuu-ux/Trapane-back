import { NextApiRequest, NextApiResponse } from "next";
import { getTiers } from "@/service/tier";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const tiers = await getTiers();
    res.status(200).json(tiers);
  } catch (error) {
    res.status(500).json({ error });
  }
}
