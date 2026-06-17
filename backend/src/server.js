import express from "express"
import bodyParser from "body-parser"
import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js"  
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file
console.log(process.env.MONGO_URI);

const app = express();
const PORT = process.env.PORT || 5090;

connectDB();
// Changed from express.json() to bodyParser.json() to ensure proper parsing of JSON bodies
app.use(bodyParser.json()); // Middleware to parse JSON bodies
app.use("/api/notes", notesRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on Port : ${PORT}`);
});
