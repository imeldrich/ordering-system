const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must have a name"],
  },
  price: {
    type: Number,
    required: [true, "must have a price"],
  },
  image: {
    type: String,
    required: [true, "must have a image"],
  },
  category: {
    type: String,
    required: [true, "must have a category"],
  },
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
