import express from "express"

const app = express()

app.get("/api/notes", (req, res) => {
  res.send("You got 69 notes.");
})

app.listen(5001, () => {
  console.log("Server is running on port : 5001");
});

/*
To run the server, use the command: 
node server.js 
npm run start
*/