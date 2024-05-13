import { NextApiRequest, NextApiResponse } from "next";
export interface PatronType {
  name: string;
  email: string;
  password: string;
  profilePic: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface CreatorType {
  name: string;
  email: string;
  password: string;
  profilePic: string;
  coverPic: string;
  bio: string;
  createdAt: Date;
  updatedAt: Date;
  category: string;
}
export interface CategoryType {
  name: string;
  desc: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface CommentType {
  patronId: string;
  text: string;
  createdAt: Date;
  updatedAt: Date;
  likes: number;
}
export interface PostType {
  creatorId: string;
  title: string;
  bodyText: string;
  imageURL: string;
  videoURL: string;
  likes: String[];
  contentType: "text" | "image" | "video";
  createdAt: Date;
  updatedAt: Date;
  comments: {
    patronId: string;
    text: string;
    createdAt: Date;
    updatedAt: Date;
    likes: number;
  }[];
}
export interface SubscriptionType {
  patronId: string;
  creatorId: string;
  startDate: Date;
  endDate: Date;
  createdAt: Date;
  tierId: string;
  updatedAt: Date;
  status: "active" | "inactive" | "cancelled";
  paymentMethod: "card" | "qpay";
}
export interface TierType {
  creatorId: string;
  title: string;
  desc: string;
  imageURL: string;
  price: number;
}
export interface ExtendedNextApiRequest extends NextApiRequest {
  decodedPatronId?: any;
  decodedCreatorId?: any;
}
export interface jwtPayload {
  id: string;
  iat: number;
  exp: number;
}