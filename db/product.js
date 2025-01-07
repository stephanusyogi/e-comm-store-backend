const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  name: String,
  shortDescription: String,
  description: String,
  purchagePrize: Number,
  sellingPrice: Number,
  images: Array(String),
  categoryId: [{ type: mongoose.Schema.Types.ObjectId, ref: "categories" }],
});

const Product = mongoose.model("products", categorySchema);
module.exports = Product;
