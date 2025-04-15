const Company = require("../models/companyModel");

// Create a new company
exports.createCompany = async (req, res) => {
  try {
    const company = await Company.create(req.body);
    res.status(201).json(company);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all companies
exports.getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.find()
      .populate("category")
      .populate("subcategories");
    res.json(companies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single company by ID
exports.getCompanyById = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id)
      .populate("category")
      .populate("subcategories");

    if (!company) return res.status(404).json({ error: "Company not found" });

    res.json(company);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a company by ID
exports.updateCompany = async (req, res) => {
  try {

    console.log(req.body);
    const company = await Company.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!company) return res.status(404).json({ error: "Company not found" });

    res.json(company);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a company by ID
exports.deleteCompany = async (req, res) => {
  try {
    const company = await Company.findByIdAndDelete(req.params.id);

    if (!company) return res.status(404).json({ error: "Company not found" });

    res.json({ message: "Company deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
