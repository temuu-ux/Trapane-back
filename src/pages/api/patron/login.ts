import { connectDB } from "@/helper/connectDB";
import { NextApiResponse, NextApiRequest } from "next";
import { LoginPatron } from "@/service/patron";
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDB();

  try {
    const { email, password } = req.body;
    const token = await LoginPatron(email, password);
    res.status(200).json({ token: token, message: "Login Successful" });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
export default handler;
