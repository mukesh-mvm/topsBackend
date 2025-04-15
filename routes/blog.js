const express = require("express");
const router = express.Router();
const {
  createBlog,
  getAllBlogs,
  getblogbyCategory,
  getBlogBySlug,
  updateBlog,
  deleteBlog,
} = require("../controllers/blog.controller");

// POST ROUTE TO CREATE BLOG    
router.post("/blogs", createBlog);

router.get("/blogs", getAllBlogs);

router.get("/blogs/:slug", getBlogBySlug);

// GET blogs by category
router.get("/blogs/category/:categoryId",  getblogbyCategory);


router.put("/blogs/:slug", updateBlog);

router.delete("/blogs/:slug", deleteBlog);

module.exports = router;
