import { connectDB } from "@/helper/connectDB";
import { NextApiResponse, NextApiRequest } from "next";

import { updatePatron } from "@/service/patron";
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDB();

  try {
    const { id, name, email, password, profilePic } = req.body;
    // const patron = await getPatron(id);

    const updatedPatron = await updatePatron(id, {
      name,
      email,
      password,
      profilePic,
      updatedAt: new Date(),
      createdAt: new Date(),
    });
    res.status(200).json(updatedPatron);
  } catch (error) {
    res.status(500).json(error);
  }
};
export default handler;
