import cors from "@/helper/cors";
import { connectDB } from "@/helper/connectDB";
import { NextApiResponse, NextApiRequest } from "next";
import { updateCategory } from "@/service/category";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDB();

  try {
    const { _id, name, desc, createdAt } = req.body;
    const updatedCategory = await updateCategory(_id, {
      name,
      desc,
      updatedAt: new Date(),
      createdAt,
    });
    res.status(200).json("Category update successfully");
  } catch (error) {
    res.status(500).json(error);
  }
};

export default handler;
