import mongoose from "mongoose";

const connectMongoose = async () => {
  try {
    mongoose.set("strictQuery", false);
    const db = await mongoose.connect("mongodb://127.0.0.1:27017/Bosta");
    console.log(`MongoDB connected successfully at: ${db.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

export default connectMongoose;
