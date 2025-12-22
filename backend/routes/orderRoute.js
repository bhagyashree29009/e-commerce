const express = require("express");
const router = express.Router();

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const {
  newOrder,
  getSingleOrder,
  myOrders,
} = require("../controllers/orderController");

router.route("/order/new").post(isAuthenticatedUser, newOrder);

// Only admin will know the details
router
  .route("/order/:id")
  .get(isAuthenticatedUser, authorizeRoles, getSingleOrder);

router.route("/orders/me").get(isAuthenticatedUser, myOrders);

module.exports = router;
