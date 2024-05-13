import cors from "@/helper/cors";
import { connectDB } from "@/helper/connectDB";
import { NextApiResponse, NextApiRequest } from "next";
import { PatronType } from "@/utils/types";
import { createPatron } from "@/service/patron";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDB();

  try {
    const { name, email, password, profilePic } = req.body;
    const patron: PatronType = {
      name,
      email,
      password,
      profilePic,
      updatedAt: new Date(),
      createdAt: new Date(),
    };
    const newPatron = await createPatron(patron);
    res.status(200).json(newPatron);
  } catch (error) {
    res.status(500).json(error);
  }
};
export default handler;
