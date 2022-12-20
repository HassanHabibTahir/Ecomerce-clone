const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ProductSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  price: Number,
  image: String,
  description: String,
  category: String,
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});
const product = mongoose.model("Product", ProductSchema);
module.exports = product;
