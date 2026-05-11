const extractData = require("../services/extractor");
const News = require("../models/News");

// Home
exports.getHomePage = async (req, res) => {
  const news = await News.find().sort({ createdAt: -1 });
  res.render("index", { news });
};

exports.getBreakingNews = async (req, res) => {
  const news = await News.find()
    .sort({ publishedAt: -1 })
    .limit(10);

  res.render("breaking", { news });
};

exports.getCategoryNews = async (req, res) => {
  const category = req.params.name;
  const news = await News.find({ category });
  res.render("category", { news, category });
};

exports.getAddPage = (req, res) => {
  res.render("add");
};

// Add
exports.addNews = async (req, res) => {
  try {
    const url = req.body.url;
    const category = req.body.category;

    // DB-level dedup (fast check)
    const exists = await News.findOne({ url });
    if (exists) return res.redirect("/");

    const data = await extractData(url);

    if (!data || !data.title) return res.redirect("/");

    // normalize
    const cleanData = {
      title: data.title.trim(),
      description: data.description?.trim() || "No description",
      image: data.image || "https://via.placeholder.com/200",
      url: data.url,
      category: category,
      publishedAt: new Date()
    };

    await News.create(cleanData);

    res.redirect("/");
  } catch (err) {
    console.error(err.message);
    res.send("Error");
  }
};

// search
exports.getsearchPage = async (req, res) => {
  try {

    const query = req.query.query;

    const searchedNews = await News.find({
      $or: [
        {
          title: {
            $regex: query,
            $options: "i"
          }
        },
        {
          description: {
            $regex: query,
            $options: "i"
          }
        }
      ]
    });

    res.render("search", {
      news: searchedNews
    });

  } catch (err) {
    console.log(err);
    res.redirect("/");
  }
};