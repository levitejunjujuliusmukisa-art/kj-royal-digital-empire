
const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;

app.set("trust proxy", 1);

app.use(express.json({ limit: "15kb" }));

app.use(express.static(path.join(__dirname, "public")));

// Health check
app.get("/health", (req, res) => {
  res.json({
    status: "online",
    business: "KJ ROYAL DIGITAL EMPIRE",
    message: "Digital marketplace is running successfully"
  });
});

// Homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start server
app.listen(PORT, "0.0.0.0", () => {
  console.log("KJ ROYAL DIGITAL EMPIRE is running on port " + PORT);
});
