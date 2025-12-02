const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
} = require("../controllers/productController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

//making routes for all

router.route("/products").get(getAllProducts); //used get method to get all the product list
router
  .route("/product/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createProduct); //used post method to create a new product.

router
  .route("/product/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct)
  .get(getProductDetails); //make route for update any product.

//route for getting the product details

module.exports = router;
