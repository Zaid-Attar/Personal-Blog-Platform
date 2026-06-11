import express from "express"
import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js"  
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file
console.log(process.env.MONGO_URI);

const app = express();
const PORT = process.env.PORT || 5090;

connectDB();

app.use("/api/notes", notesRoutes);
  
app.listen(PORT, () => {
  console.log(`Server is running on Port : ${PORT}`);
});

  /*
  To run the server, use the command: 
  node server.js 
  npm run start
  */
