import Review from "../models/Review.js";
import { generateAI } from "../services/llmService.js";

export const submitReview = async (req, res) => {
  try {
    const { rating, review } = req.body;
    if (!review) return res.status(400).json({ error: "Empty review" });

    const ai = await generateAI(review, rating);

    const saved = await Review.create({
      rating,
      review,
      aiResponse: ai.response,
      aiSummary: ai.summary,
      aiAction: ai.action
    });

    res.json(saved);
  } catch {
    res.status(500).json({ error: "LLM failure" });
  }
};

export const getReviews = async (_, res) => {
  const reviews = await Review.find().sort({ createdAt: -1 });
  res.json(reviews);
};
