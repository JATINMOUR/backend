import dotenv from "dotenv";
dotenv.config();
import app from "../../frontend/backend/src/app.js";
import connectDB from "../../frontend/backend/src/config/db.js";

connectDB();
app.listen(process.env.PORT, () =>
  console.log(`Server running on ${process.env.PORT}`)
);
