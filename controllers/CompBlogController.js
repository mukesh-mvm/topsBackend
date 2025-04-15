// controllers/compBlogController.js
const CompBlog = require("../models/CompBlog");
const slugify = require("slugify");

// CREATE
exports.createCompBlog = async (req, res) => {
  try {
    const { title, mtitle, mdesc, categories, subcategories, company, tags, postedBy } = req.body;

    const compBlog = await CompBlog.create({
      title,
      slug: slugify(title).toLowerCase(),
      mtitle,
      mdesc,
      categories,
      subcategories,
      company,
      tags,
      postedBy,
    });

    res.status(201).json(compBlog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// READ ALL
exports.getAllCompBlogs = async (req, res) => {
  try {
    const blogs = await CompBlog.find()
      .populate("categories")
      .populate("subcategories")
      .populate("company")
      .populate("tags")
      .populate("postedBy");
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ ONE
exports.getCompBlogBySlug = async (req, res) => {
  try {
    const blog = await CompBlog.findOne({ slug: req.params.slug })
      .populate("categories")
      .populate("subcategories")
      .populate("company")
      .populate("tags")
      .populate("postedBy");

    if (!blog) return res.status(404).json({ error: "Blog not found" });
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE
exports.updateCompBlog = async (req, res) => {
  try {
    const updatedBlog = await CompBlog.findOneAndUpdate(
      { slug: req.params.slug },
      req.body,
      { new: true }
    )
      .populate("categories")
      .populate("subcategories")
      .populate("company")
      .populate("tags")
      .populate("postedBy");

    if (!updatedBlog) return res.status(404).json({ error: "Blog not found" });
    res.json(updatedBlog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE
exports.deleteCompBlog = async (req, res) => {
  try {
    const deleted = await CompBlog.findOneAndDelete({ slug: req.params.slug });
    if (!deleted) return res.status(404).json({ error: "Blog not found" });
    res.json({ message: "Blog deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


