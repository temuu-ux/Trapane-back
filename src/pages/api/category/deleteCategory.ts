import cors from "@/helper/cors";
import { connectDB } from "@/helper/connectDB";
import { NextApiResponse, NextApiRequest } from "next";
import { deleteCategory } from "@/service/category";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDB();

  try {
    const id = req.body._id;
    const deletedCategory = await deleteCategory(id);
    res.status(200).json("Category delete successfully");
  } catch (error) {
    res.status(500).json(error);
  }
};

export default handler;
