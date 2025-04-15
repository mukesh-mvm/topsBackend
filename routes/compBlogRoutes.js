// routes/compBlogRoutes.js
const express = require("express");
const router = express.Router();
const {createCompBlog,getAllCompBlogs,getCompBlogBySlug,updateCompBlog,deleteCompBlog} = require("../controllers/CompBlogController");

router.post("/createCompblogs", createCompBlog);
router.get("/getALlcompblogs", getAllCompBlogs);
router.get("/getOnecompblogs/:slug", getCompBlogBySlug);
router.put("/updatecompblogs/:slug", updateCompBlog);
router.delete("/deletecompblogs/:slug", deleteCompBlog);

module.exports = router;