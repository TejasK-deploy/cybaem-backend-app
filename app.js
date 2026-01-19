const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());
app.use(express.static("public"));

const users = [
  { id: 1, name: "Alice", role: "Sales" },
  { id: 2, name: "Bob", role: "Support" }
];

app.get("/api/health", (req, res) => {
  res.json({ status: "Backend is running fine" });
});

app.get("/api/users", (req, res) => {
  res.json(users);
});

app.post("/api/leads", (req, res) => {
  res.json({ message: "Lead added successfully" });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.listen(3000, () => {
  console.log("Backend running on port 3000");
});
