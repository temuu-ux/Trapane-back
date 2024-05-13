import cors from "@/helper/cors";
import { connectDB } from "@/helper/connectDB";
import { NextApiResponse, NextApiRequest } from "next";
import { deletePatron } from "@/service/patron";
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDB();

  try {
    const id = req.body.id;
    const deletedPatron = await deletePatron(id);
    res.status(200).json(deletedPatron);
  } catch (error) {
    res.status(500).json(error);
  }
};
export default handler;
