import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    rating: { type: Number, required: true },
    review: { type: String, required: true },
    aiResponse: String,
    aiSummary: String,
    aiAction: String
  },
  { timestamps: true }
);

export default mongoose.model("Review", reviewSchema);
