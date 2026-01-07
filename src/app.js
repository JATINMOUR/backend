import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// 🔹 MongoDB connect (Vercel-safe)
if (!mongoose.connection.readyState) {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected ✅"))
    .catch((err) => console.error("Mongo error ❌", err.message));
}

// 🔹 Test route
app.get("/", (req, res) => {
  res.json({ status: "Backend running on Vercel 🚀" });
});

// 🔹 Example API
app.get("/api/health", (req, res) => {
  res.json({ ok: true });
});

export default app; // ✅ VERY IMPORTANT
