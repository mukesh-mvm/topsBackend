const express = require("express");
const router = express.Router();
const {createSubcategory,getAllSubcategories,getSubcategoryById,updateSubcategory,deleteSubcategory,getSubcategoriesByCategoryId} = require("../controllers/subcategoryController");

router.post("/creatSubcategory", createSubcategory);
router.get("/getAllSubcategory", getAllSubcategories);
router.get("/getOneSubCategory/:id", getSubcategoryById);
router.get("/getOneSubByCategoryId/:id", getSubcategoriesByCategoryId);
router.put("/updateSubcategory/:id", updateSubcategory);
router.delete("/delteSubCategory/:id", deleteSubcategory);

module.exports = router;
