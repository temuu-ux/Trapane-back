import cors from "@/helper/cors";
import { connectDB } from "@/helper/connectDB";
import { NextApiResponse, NextApiRequest } from "next";
import { SubscriptionType } from "@/utils/types";
import { createSubscription } from "@/service/subscription";
import { getCreatorByName } from "@/service/creator";
import jwt from "jsonwebtoken";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDB();
  await cors(req, res);

  try {
    console.log(req.body);
    const { patronId, creatorName, tierId, startDate, status, paymentMethod } =
      req.body;
    console.log("patronId", patronId);
    const decodedPatronId: any = jwt.verify(
      patronId,
      process.env.JWT_SECRET || ""
    );
    console.log("decodedPatronId", decodedPatronId);

    const creator = await getCreatorByName(creatorName);
    const startDateObj = new Date(startDate);
    // const endDateObj = new Date(startDateObj.getTime() + 1000 * 60 * 60 * 24 * 30);

    const subscription: SubscriptionType = {
      patronId: decodedPatronId.id,
      creatorId: creator._id,
      startDate: startDateObj,
      endDate: new Date(),
      status,
      paymentMethod,
      tierId,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    console.log("subscription", subscription);
    const newSubscription = await createSubscription(subscription);
    res.status(200).json({
      newSubscription: newSubscription,
      message: "Subscription created successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export default handler;