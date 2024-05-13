import { connectDB } from "@/helper/connectDB";

import { getCreators } from "@/service/creator";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectDB();
  try {
    const creators = await getCreators();
    res.status(200).json(creators);
  } catch (error) {
    res.status(500).json(error);
  }
}
