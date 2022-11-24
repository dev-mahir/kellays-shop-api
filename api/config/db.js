import mongoose from "mongoose";

// MongoDB String 
const URL = process.env.MONGODB_URL || "mongodb+srv://devmahir:devmahir@cluster0.myktdjo.mongodb.net/shop?retryWrites=true&w=majority";
// create a mongoDB connection 
const connectDB = async() => {
    const connection = await mongoose.connect(URL);
    console.log(`mongoDB connected successfully.`.bgMagenta.black);
}

// export mongo connection 

export default connectDB;