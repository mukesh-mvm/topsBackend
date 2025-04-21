// routes/compBlogRoutes.js
const express = require("express");
const router = express.Router();
const {createCompBlog,getAllCompBlogs,getCompBlogBySlug,updateCompBlog,deleteCompBlog,filterBLog,updateStatus} = require("../controllers/CompBlogController");

router.post("/createCompblogs", createCompBlog);
router.get("/getALlcompblogs", getAllCompBlogs);
router.get("/filter/:slug", filterBLog);
router.get("/getOnecompblogs/:slug", getCompBlogBySlug);
router.put("/updatecompblogs/:slug", updateCompBlog);
router.patch("/updateCompStatus/:id", updateStatus);
router.delete("/deletecompblogs/:slug", deleteCompBlog);

module.exports = router;