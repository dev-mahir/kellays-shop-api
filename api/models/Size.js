import mongoose from "mongoose";

const sizeSchema = mongoose.Schema(
  {
    name: {
      type: String,
    }, 
  },
  {
    versionKey: false,
  }
);

export default mongoose.model("Size", sizeSchema);
