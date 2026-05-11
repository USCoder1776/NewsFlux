const axios = require("axios");
const cheerio = require("cheerio");

async function extractData(url) {
  try {
    const { data } = await axios.get(url);

    const $ = cheerio.load(data);

   const title =
  $('meta[property="og:title"]').attr("content") ||
  $('meta[name="twitter:title"]').attr("content") ||
  $('title').text();

const description =
  $('meta[property="og:description"]').attr("content") ||
  $('meta[name="description"]').attr("content");

const image =
  $('meta[property="og:image"]').attr("content");
    return {
      title,
      description,
      image,
      url
    };

  } catch (error) {
    console.log("Error:", error.message);
  }
}

module.exports = extractData;