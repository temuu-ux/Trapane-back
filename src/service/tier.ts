import { TierType } from "@/utils/types"; 
import { Tier } from "@/models/tier.schema";
import { connectDB } from "@/helper/connectDB";
export const getTiers = async () => {
  await connectDB();
  try {
    const tiers = await Tier.find();
    return tiers;
  }
  catch (error) {
    throw error;
  }
};
export const getTier = async (id: number) => {
  await connectDB();
  try {
    const tier = await Tier.findById(id);
    return tier;
  }
  catch (error) {
    throw error;
  }
};

export const createTier = async (tier: TierType) => {
  await connectDB();
  try {
    const newTier = await Tier.create({ ...tier });
    return newTier;
  }
  catch (error) {
    throw error;
  }
};
export const updateTier = async (id: number, tier: TierType) => {
  await connectDB();
  try {
    const upDatedTier = await Tier.findByIdAndUpdate(id, { tier });

    return upDatedTier;
  }
  catch (error) {
    throw error;
  }
};
export const deleteTier = async (id: number) => {
  await connectDB();
  try {
    const deletedTier = await Tier.findByIdAndDelete(id);

    return deletedTier;
  }
  catch (error) {
    throw error;
  }
};
  export const getTierByCreatorId = async (creatorId: string) => {
    await connectDB();
    try {
      const tier = await Tier.find({ creatorId });
      return tier;
    } catch (error) {
      throw error;
    }
  };