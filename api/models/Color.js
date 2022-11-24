import mongoose from "mongoose";

const colorSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model("Color", colorSchema);
