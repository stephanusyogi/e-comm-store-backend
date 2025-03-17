const express = require("express");
const router = express.Router();
const {
  addBrand,
  updateBrand,
  deleteBrand,
  getBrands,
  getBrandById,
} = require("../handlers/brand_handler");

router.get("", async (req, res) => {
  try {
    let result = await getBrands();
    res.send(result);
  } catch (error) {
    res.status(400).json({ error });
  }
});

router.get("/:id", async (req, res) => {
  try {
    let id = req.params["id"];
    let result = await getBrandById(id);
    res.send(result);
  } catch (error) {
    res.status(400).json({ error });
  }
});

router.post("", async (req, res) => {
  try {
    let model = req.body;
    let result = await addBrand(model);
    res.send({ message: "Brand added successfully", result });
  } catch (error) {
    res.status(400).json({ error });
  }
});

router.put("/:id", async (req, res) => {
  try {
    let model = req.body;
    let id = req.params["id"];
    await updateBrand(id, model);
    res.send({ message: "Brand updated successfully" });
  } catch (error) {
    res.status(400).json({ error });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let id = req.params["id"];
    await deleteBrand(id);
    res.send({ message: "Brand deleted successfully" });
  } catch (error) {
    res.status(400).json({ error });
  }
});

module.exports = router;
