require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, "../public")));

const newsRoutes = require("./routes/newsRoutes");
connectDB();



// EJS setup
app.set("view engine", "ejs");

// Middleware (POST data ke liye)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes use kar
app.use("/", newsRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});