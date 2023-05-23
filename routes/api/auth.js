const express = require("express");
const router = express.Router();

const { validateBody, authenticate } = require("../../middlewares");
const { registrationAndLoginSchema } = require("../../models/user");
const ctrl = require("../../controllers/auth");

router.post(
  "/register",
  validateBody(registrationAndLoginSchema),
  ctrl.register
);

router.post("/login", validateBody(registrationAndLoginSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrentUser);

router.post("/logout", authenticate, ctrl.logout);

module.exports = router;
