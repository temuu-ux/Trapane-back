import { CreatorModel } from "@/models/creator.schema";
import { CreatorType } from "@/utils/types";
import { Tier } from "@/models/tier.schema";
import { Subscription } from "@/models/subscription.schema";
import jwt from "jsonwebtoken";
export const createCreator = async (
  creator: CreatorType
): Promise<CreatorType | any> => {
  const newUser = await CreatorModel.findOne({ email: creator.email });

  if (newUser) {
    return "email already registered";
  } else {
    try {
      const newCreator = await CreatorModel.create({ ...creator });
      return "Creator create successfully";
    } catch (error) {
      throw error;
    }
  }
};
export const getCreator = async (
  creatorId: string
): Promise<CreatorType | any> => {
  try {
    const creator = await CreatorModel.findById(creatorId);
    console.log("creator", creator);
    return creator;
  } catch (error) {
    throw error;
  }
};
export const getCreators = async (): Promise<CreatorType[] | any> => {
  try {
    const creators = await CreatorModel.find();
    
    return creators;
  } catch (error) {
    throw error;
  }
};
export const updateCreator = async (
  creatorId: string,
  creator: CreatorType
): Promise<CreatorType | any> => {
  try {
    const updatedCreator = await CreatorModel.findByIdAndUpdate(
      creatorId,
      creator
    );
    console.log("updatedCreator", updatedCreator);
    return updatedCreator;
  } catch (error) {
    throw error;
  }
};
export const deleteCreator = async (
  creatorId: string
): Promise<CreatorType | any> => {
  try {
    const deletedCreator = await CreatorModel.findByIdAndDelete(creatorId);
    console.log("deletedCreator", deletedCreator);
    return deletedCreator;
  } catch (error) {
    throw error;
  }
};
export const getCreatorByName = async (name: string) => {
  try {
    const creator = await CreatorModel.findOne({ name });
    return creator;
  } catch (error) {
    throw error;
  }
};
export const deleteAllCreator = async () => {
  try {
    const deletedTier = await Tier.deleteMany({});
    const deletedSubscription = await Subscription.deleteMany({});
    return deletedTier;
  } catch (error) {
    throw error;
  }
};
export const LoginCreator = async (email: string, password: string) => {
  try {
    const creator = await CreatorModel.findOne({ email });
    if (creator.password === password) {
      const token = jwt.sign(
        { id: creator.id },
        process.env.JWT_SECRET || "LLL",
        {
          expiresIn: "1h",
        }
      );
      return token;
    } else {
      throw new Error("Invalid password");
    }
  } catch (error) {
    throw error;
  }
};