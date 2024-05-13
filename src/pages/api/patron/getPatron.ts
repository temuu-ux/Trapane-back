import { connectDB } from "@/helper/connectDB";
import { NextApiResponse, NextApiRequest } from "next";
import { getPatrons } from "@/service/patron";
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDB();

  try {
    const patrons = await getPatrons();
    res.status(200).json({ patrons: patrons });
  } catch (error) {
    res.status(500).json(error);
  }
};
export default handler;
