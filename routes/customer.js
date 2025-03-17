const express = require("express");
const router = express.Router();
const {
  getNewProducts, getFeaturedProducts,
} = require("../handlers/product_handler");

router.get("/new-product", async (req, res) => {
  try {
    let result = await getNewProducts();
    res.send(result);
  } catch (error) {
    res.status(400).json({ error });
  }
});

router.get("/featured-product", async (req, res) => {
  try {
    let result = await getFeaturedProducts();
    res.send(result);
  } catch (error) {
    res.status(400).json({ error });
  }
});

module.exports = router;
