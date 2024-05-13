import mongoose, { Schema, model } from 'mongoose';

const SubscriptionSchema = new mongoose.Schema({
  patronId: { type: Schema.Types.ObjectId, ref: "Patron" },
  creatorId: { type: Schema.Types.ObjectId, ref: "Creator" },
  tierId: { type: Schema.Types.ObjectId, ref: "Tier" },
  startDate: { type: Date, default: Date.now() },
  endDate: Date,
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
  status: { type: String, enum: ["active", "inactive", "cancelled"] },
  paymentMethod: { type: String, enum: ["card", "qpay"] },
});

export const Subscription = mongoose.models.Subscription || mongoose.model('Subscription', SubscriptionSchema);