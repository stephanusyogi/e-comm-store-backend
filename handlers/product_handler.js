const Product = require("../db/product");

async function getProducts() {
  let products = await Product.find();
  return products.map((item) => item.toObject());
}

async function getProductById(id) {
  let product = await Product.findById(id);
  return product.toObject();
}

async function addProduct(model) {
  let product = new Product({
    ...model
  });
  await product.save();
  return product.toObject();
}

async function updateProduct(id, model) {
  await Product.findOneAndUpdate({ _id: id }, model);
  return;
}

async function deleteProduct(id) {
  await Product.findByIdAndDelete(id);
  return;
}

async function getNewProducts() { 
  let newProducts = await Product.find({
    isNewProduct:true,
  });
  return newProducts.map((item)=>item.toObject());
}

async function getFeaturedProducts() { 
  let featuredProducts = await Product.find({
    isFeatured:true,
  });
  return featuredProducts.map((item)=>item.toObject());
}

module.exports = {
  addProduct,
  updateProduct,
  deleteProduct,
  getProducts,
  getProductById,
  getNewProducts,
  getFeaturedProducts
};
