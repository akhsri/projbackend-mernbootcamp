const express = require("express");
const router = express.Router();

const { getCategoryById, getAllCategory, getCategory, updateCategory, removeCategory, createCategory } = require("../controllers/category");
const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");
const { getUserById } = require("../controllers/user");

// Params
router.param("userId", getUserById);
router.param("categoryId", getCategoryById);

// Actual routes goes here

// Create category
router.post("/category/create/:userId", isSignedIn, isAuthenticated, isAdmin, createCategory)

//Read Category
router.get("/category/:categoryId", getCategory)
router.get("/categories", getAllCategory)

// Update category
router.put("/category/:categoryId/:userId", isSignedIn, isAuthenticated, isAdmin, updateCategory)

// Delete Category
router.delete("/category/:categoryId/:userId", isSignedIn, isAuthenticated, isAdmin, removeCategory)



module.exports = router;    