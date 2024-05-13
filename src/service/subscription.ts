import { SubscriptionType } from "@/utils/types";
import { Subscription } from "@/models/subscription.schema";
import { connectDB } from "@/helper/connectDB";
import { NextApiRequest, NextApiResponse } from "next";
interface DecodedType {
  id: string;
  iat: number;
  exp: number;
}
export const createSubscription = async (subscription: SubscriptionType) => {
  await connectDB();
  try {
    const newSubscription = await Subscription.create({...subscription});
    return newSubscription;
  } catch (error) {
    throw error;
  }
};

export const getSubscriptions = async () => {
  await connectDB();
  try {
    const subscriptions = await Subscription.find();
    return subscriptions;
  } catch (error) {
    throw error;
  }
};
export const getSubscription = async (id: string) => {
  await connectDB();
  try {
    const subscription = await Subscription.findById(id);
    return subscription;
  } catch (error) {
    throw error;
  }
};
export const updateSubscription = async (
  id: string,
  subscription: SubscriptionType
) => {
  await connectDB();
  try {
    const updatedSubscription = await Subscription.findByIdAndUpdate(
      id,
      subscription
    );
    return updatedSubscription;
  } catch (error) {
    throw error;
  }
};
export const deleteSubscription = async (id: string) => {
  await connectDB();
  try {
    const deletedSubscription = await Subscription.findByIdAndDelete(id);
    return deletedSubscription;
  } catch (error) {
    throw error;
  }
};
export const checkSubscription = async (
  patronId: string,
  creatorId: string
) => {
  await connectDB();
  if (patronId) {
    try {
      // console.log(patronId, creatorId);

      const subscription = await Subscription.find({
        patronId: patronId,
        creatorId: creatorId,
      });
      if (subscription.length > 0) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      throw error;
    }
  } else {
    return false;
  }
};
export const getSubscriptionCount = async (creatorId: string) => {
  await connectDB();
  try {
    const subscriptions = await Subscription.find({ creatorId });
    return subscriptions.length;
  } catch (error) {
    throw error;
  }
};
