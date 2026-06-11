  import express from "express"
  import notesRoutes from "./routes/notesRoutes.js"

  const app = express();

  app.use("/api/notes", notesRoutes);
  // app.get("/api/notes", (req, res) => {
  //   res.status(200).send("You got 69 notes.");
  // })

  // app.post("/api/notes", (req, res) => {
  //   res.status(201).json({ message: "Post created successfully." });
  // })

  // app.put("/api/notes/:id", (req, res) => {
  //   res.status(200).json({ message: "Post updated successfully." });
  // })

  // app.delete("/api/notes/:id", (req, res) => {
  //   res.status(200).json({ message: "Post updated successfully." });
  // })

  app.listen(5090, () => {
    console.log("Server is running on port : 5090");
  });

  /*
  To run the server, use the command: 
  node server.js 
  npm run start
  */