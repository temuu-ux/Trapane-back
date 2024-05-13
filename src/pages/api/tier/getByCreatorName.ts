import cors from "@/helper/cors";
import { NextApiRequest, NextApiResponse } from "next";
import { getTierByCreatorId } from "@/service/tier";
import { getCreatorByName } from "@/service/creator";
import { connectDB } from "@/helper/connectDB";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectDB();

  const { creatorName } = req.body;

  if (!creatorName) {
    return res.status(400).json({ error: "Missing creatorName" });
  }

  try {
    const creator = await getCreatorByName(creatorName);
    const data = await getTierByCreatorId(creator.id);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error });
  }
}
