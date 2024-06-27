import mongoose from "mongoose";

export const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to the database");
  } catch (err) {
    console.log(err.message);
    throw new Error("Error connecting to the database");
  }
};
