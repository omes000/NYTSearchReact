const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  headline: { 
  	main: {type: String, required: true }
  },
  web_url: { type: String, required: true },
  pub_date: { type: Date },
  multimedia: {type: Array},
  snippet:{type: String}
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
