import { connectDB } from "@/helper/connectDB";
import { NextApiRequest, NextApiResponse } from "next";
import { createCreator } from "@/service/creator";
import { CreatorType } from "@/utils/types";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDB();

  try {
    const { name, email, password, profilePic, coverPic, bio, category } =
      req.body;
    const creator: CreatorType = {
      name,
      email,
      password,
      profilePic,
      coverPic,
      bio,
      category,
      updatedAt: new Date(),
      createdAt: new Date(),
    };
    const newCreator = await createCreator(creator);
    res.status(200).json(newCreator);
  } catch (error) {
    res.status(500).json(error);
  }
};

export default handler;
