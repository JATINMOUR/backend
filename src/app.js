import express from "express";
import cors from "cors";
import reviewRoutes from "./routes/reviewRoutes.js";
import connectDB from "./config/db.js";

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// DB connection (safe for both)
connectDB();

// routes
app.use("/api/reviews", reviewRoutes);

// health check
app.get("/", (req, res) => {
  res.status(200).json({ status: "API running successfully 🚀" });
});

export default app;
