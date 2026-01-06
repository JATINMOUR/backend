import express from "express";
import { submitReview, getReviews } from "../controllers/reviewController.js";

const router = express.Router();

router.post("/submit", submitReview);
router.get("", getReviews);

export default router;
