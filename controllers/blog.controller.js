const Blog = require("../models/blog");
const Categories = require("../models/category");
const slugify = require("slugify");

// Create a new blog
exports.createBlog = async (req, res) => {
  try {
    const { title } = req.body;

    const blog = new Blog({
      ...req.body,
      slug: slugify(title).toLowerCase(),
    });

    await blog.save();
    res.status(201).json(blog);
    res.status(201).json(blog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all blogs
exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({})
      .populate("categories", "name slug")
      .populate("tags", "name slug")
      .populate("subcategories", "name")
      .populate("postedBy", "username email") // Only get username and email
      .sort({ createdAt: -1 });

    console.log("Get Blogs");
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getblogbyCategory =  async (req, res) => {
  const { categoryId } = req.params;

  try {
    const blogs = await Blog.find({ "categories._id": categoryId }).populate("categories");
    res.json(blogs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
}


// Get single blog by slug
exports.getBlogBySlug = async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug })
      .populate("categories", "name slug")
      .populate("tags", "name slug")
      .populate("subcategories", "name")
      .populate("postedBy", "username email");

    if (!blog) return res.status(404).json({ error: "Blog not found" });

    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Update a blog by slug
exports.updateBlog = async (req, res) => {
  try {
    const updateBlog = await Blog.findOneAndUpdate(
      { slug: req.params.slug }, // filter
      req.body,                  // update
      { new: true, runValidators: true } // options
    );

    if (!updateBlog) {
      return res.status(404).json({ error: "Blog not found" });
    }

    res.json(updateBlog); // return updated blog
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};


exports.deleteBlog = async (req, res) => {
  try {
   const blog = await Blog.findByIdAndDelete({ _id: req.params.id });
       if (!blog) return res.status(404).json({ error: "Tag not found" });
   

    res.json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};