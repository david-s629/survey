const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is working");
});

app.get("/api/surveys", (req, res) => {
  res.json([
    { id: "1", title: "סקר לדוגמה", reward: 2 },
    { id: "2", title: "סקר נוסף", reward: 3 }
  ]);
});

app.get("/api/balance", (req, res) => {
  res.json({ balance: 10 });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running");
});
