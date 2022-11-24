import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    slug: {
      type: String,
    },
    regular_price: {
      type: Number,
      trim: true,
    },
    sale_price: {
      type: Number,
      trim: true,
    },
    stock: {
      type: Number,
      trim: true,
    },
    sort_desc: {
      type: String,
      trim: true,
    },
    long_desc: {
      type: String,
      trim: true,
    },
    photo: {
      type: String,
    },
    gallery: {
      type: Array,
      default: [],
    },
    category: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
      },
    ],
    rating: {
      type: String,
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamp: true,
    versionKey: false,
  }
);

export default mongoose.model("Product", productSchema);
