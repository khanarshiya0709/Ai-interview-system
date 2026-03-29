const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/auth");



const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

// 🔥 MongoDB connect
mongoose.connect("mongodb://127.0.0.1:27017/ai-interview")
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));

// test route
app.get("/", (req, res) => {
    res.send("API Working");
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});