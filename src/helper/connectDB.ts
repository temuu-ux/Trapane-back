import mongoose from "mongoose";
export const connectDB = async () => {
  const uri = process.env.MONGO_DB_URL;
  if (mongoose.connection.readyState != 1 && uri) {
    try {
      console.log("Connecting to MongoDB");
      await mongoose.connect(uri);
      console.log("Connected to MongoDB");
    } catch (err) {
      console.log("Error connecting to MongoDB");
    }
  } else {
    console.log("MongoDB is already connected");
  }
};
