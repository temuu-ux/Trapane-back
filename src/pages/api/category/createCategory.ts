import cors from "@/helper/cors";
import { connectDB } from "@/helper/connectDB";
import { NextApiResponse, NextApiRequest } from "next";

import { CategoryType } from "@/utils/types";
import { createCategory } from "@/service/category";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDB();
  await cors(req, res);
  try {
    const { name, desc } = req.body;
    const category: CategoryType = {
      name,
      desc,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const newCategory = await createCategory(category);
    res.status(200).json("Category created successfully");
  } catch (error) {
    res.status(500).json(error);
  }
};

export default handler;
