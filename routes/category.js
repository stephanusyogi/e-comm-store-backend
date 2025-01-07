const express = require("express");
const router = express.Router();
const Category = require("../db/category");
const {
  addCategory,
  updateCategory,
  deleteCategory,
  getCategories,
} = require("../handlers/category_handlers");

router.get("", async (req, res) => {
  try {
    let result = await getCategories();
    res.send(result);
  } catch (error) {
    res.status(400).json({ error });
  }
});

router.post("", async (req, res) => {
  try {
    let model = req.body;
    let result = await addCategory(model);
    res.send({ message: "Category added successfully", result });
  } catch (error) {
    res.status(400).json({ error });
  }
});

router.put("/:id", async (req, res) => {
  try {
    let model = req.body;
    let id = req.params["id"];
    await updateCategory(id, model);
    res.send({ message: "Category updated successfully" });
  } catch (error) {
    res.status(400).json({ error });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let id = req.params["id"];
    await deleteCategory(id);
    res.send({ message: "Category deleted successfully" });
  } catch (error) {
    res.status(400).json({ error });
  }
});

module.exports = router;
