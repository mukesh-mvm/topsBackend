const express = require("express");
const router = express.Router();
const {createCompany,getAllCompanies,getCompanyById,updateCompany,deleteCompany} = require("../controllers/companyController");

// CRUD routes
router.post("/createCompany", createCompany);
router.get("/getAllCompany", getAllCompanies);
router.get("/getCompanyById/:id", getCompanyById);
router.put("/updateCompany/:id",updateCompany);
router.delete("/deleteCompany/:id", deleteCompany);

module.exports = router;
