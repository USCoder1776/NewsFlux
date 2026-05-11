const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    image: String,
    url: { type: String, required: true, unique: true }, //  dedup at DB level
    category: { type: String, default: "general" },
    publishedAt: Date
  },
  { timestamps: true }
);

module.exports = mongoose.model("News", newsSchema);