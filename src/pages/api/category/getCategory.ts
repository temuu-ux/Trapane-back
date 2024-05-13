import { connectDB } from "@/helper/connectDB";
import { NextApiResponse, NextApiRequest } from "next";
import { getCategories } from "@/service/category";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDB();

  try {
    const categories = await getCategories();
    res.status(200).json({ categories: categories });
  } catch (error) {
    res.status(500).json(error);
  }
};

export default handler;
