const express = require("express");
const router = express.Router();

const newsController = require("../controllers/newsController");

// Home
router.get("/", newsController.getHomePage);

// Breaking
router.get("/breaking", newsController.getBreakingNews);

// Category
router.get("/category/:name", newsController.getCategoryNews);

// Add (testing ke liye)
router.get("/add", newsController.getAddPage);
router.post("/add", newsController.addNews);

// search
router.get("/search", newsController.getsearchPage);



module.exports = router;



