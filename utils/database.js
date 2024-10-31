import mongoose from 'mongoose';

let isConnected = false;

export const connectMongoDB = async () => {
  mongoose.set('strictQuery', true);
  
  if (isConnected) {
    console.log('MongoDB is already connected');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {dbName: "parafia_przybysl"});
    isConnected = true;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB", error);
  }
}