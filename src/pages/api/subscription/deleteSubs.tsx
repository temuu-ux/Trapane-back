import { connectDB } from "@/helper/connectDB";
import { NextApiResponse, NextApiRequest } from "next";
import { deleteSubscription } from "@/service/subscription";
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDB();

  try {
    const id = req.body.id;
    const deletedSubscription = await deleteSubscription(id);
    res.status(200).json({
      deletedSubscription: deletedSubscription,
      message: "Subscription deleted successfully",
    });
  } catch (error) {
    res.status(500).json(error);
  }
};
export default handler;
