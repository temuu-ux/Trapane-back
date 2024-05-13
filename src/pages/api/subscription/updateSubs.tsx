import { connectDB } from "@/helper/connectDB";
import { NextApiResponse, NextApiRequest } from "next";
import { updateSubscription } from "@/service/subscription";
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDB();

  try {
    const {
      id,
      patronId,
      creatorId,
      startDate,
      endDate,
      status,
      tierId,
      paymentMethod,
    } = req.body;
    const updatedSubscription = await updateSubscription(id, {
      patronId,
      creatorId,
      startDate,
      endDate,
      status,
      tierId,
      paymentMethod,
      updatedAt: new Date(),
      createdAt: new Date(),
    });
    res.status(200).json({
      updatedSubscription: updatedSubscription,
      message: "Subscription updated successfully",
    });
  } catch (error) {
    res.status(500).json(error);
  }
};
export default handler;
