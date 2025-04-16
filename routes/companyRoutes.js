const express = require("express");
const router = express.Router();
const {createCompany,getAllCompanies,getCompanyById,updateCompany,deleteCompany,getCompanyBySubcategoryId} = require("../controllers/companyController");

// CRUD routes
router.post("/createCompany", createCompany);
router.get("/getAllCompany", getAllCompanies);
router.get("/getCompanyById/:id", getCompanyById);
router.get("/getCompanySubId/:id", getCompanyBySubcategoryId);
router.put("/updateCompany/:id",updateCompany);
router.delete("/deleteCompany/:id", deleteCompany);

module.exports = router;
