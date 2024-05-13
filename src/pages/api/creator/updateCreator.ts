import cors from "@/helper/cors";
import { connectDB } from "@/helper/connectDB";
import { NextApiRequest, NextApiResponse } from "next";
import { createCreator } from "@/service/creator";
import { CreatorType } from "@/utils/types";
import {
  getCreators,
  getCreator,
  updateCreator,
  deleteCreator,
} from "@/service/creator";
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDB();

  try {
    const {
      _id,
      name,
      email,
      password,
      profilePic,
      coverPic,
      bio,
      category,
      createdAt,
    } = req.body;

    const updatedCreator = await updateCreator(_id, {
      name,
      email,
      password,
      profilePic,
      coverPic,
      bio,
      category,
      updatedAt: new Date(),
      createdAt,
    });
    res.status(200).json(updatedCreator);
  } catch (error) {
    res.status(500).json(error);
  }
};

export default handler;
