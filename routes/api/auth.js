const express = require("express");
const router = express.Router();

const { validateBody, authenticate, upload } = require("../../middlewares");
const {
  registrationAndLoginSchema,
  emailSchema,
} = require("../../models/user");
const ctrl = require("../../controllers/auth");

router.post(
  "/register",
  validateBody(registrationAndLoginSchema),
  ctrl.register
);

router.get("/verify/:verificationToken", ctrl.verifyEmail);

router.post("/verify", validateBody(emailSchema), ctrl.resendVerifyEmail);

router.post("/login", validateBody(registrationAndLoginSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrentUser);

router.post("/logout", authenticate, ctrl.logout);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrl.updateAvatar
);

module.exports = router;
