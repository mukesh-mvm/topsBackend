// routes/categoryRoutes.js
const express = require("express");
const router = express.Router();
const { createCategory,getCategory ,getCategoryById,updateCategory,deleteCategory} = require("../controllers/category.controller");


router.get("/category", getCategory)
router.get("/getOneCategory", getCategoryById)
router.post("/category", createCategory);
router.put("/updateCategroy/:id", updateCategory);
router.put("/deleteCategroy/:id", deleteCategory);


module.exports = router;
