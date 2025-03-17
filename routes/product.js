const express = require("express");
const router = express.Router();
const {
  addProduct,
  updateProduct,
  deleteProduct,
  getProducts,
  getProductById,
} = require("../handlers/product_handler");

router.get("", async (req, res) => {
  try {
    let result = await getProducts();
    res.send(result);
  } catch (error) {
    res.status(400).json({ error });
  }
});

router.get("/:id", async (req, res) => {
  try {
    let id = req.params["id"];
    let result = await getProductById(id);
    res.send(result);
  } catch (error) {
    res.status(400).json({ error });
  }
});

router.post("", async (req, res) => {
  try {
    let model = req.body;
    let result = await addProduct(model);
    res.send({ message: "Product added successfully", result });
  } catch (error) {
    res.status(400).json({ error });
  }
});

router.put("/:id", async (req, res) => {
  try {
    let model = req.body;
    let id = req.params["id"];
    await updateProduct(id, model);
    res.send({ message: "Product updated successfully" });
  } catch (error) {
    res.status(400).json({ error });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let id = req.params["id"];
    await deleteProduct(id);
    res.send({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(400).json({ error });
  }
});

module.exports = router;
