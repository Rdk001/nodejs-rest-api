const express = require("express");

const ctrl = require("../../controllers/contacts");

const {
  authenticate,
  validateBody,
  isValidId,
  validateEmptyBody,
} = require("../../middlewares");

const { addSchema, updateStatusSchema } = require("../../models/contact");

const router = express.Router();

router.get("/", authenticate, ctrl.listContacts);

router.get("/:id", authenticate, isValidId, ctrl.getContactById);

router.post(
  "/",
  authenticate,
  validateEmptyBody("Missing fields"),
  validateBody(addSchema),
  ctrl.addContact
);

router.delete("/:id", authenticate, isValidId, ctrl.removeContact);

router.put(
  "/:id",
  authenticate,
  validateEmptyBody("Missing fields"),
  isValidId,
  validateBody(addSchema),
  ctrl.updateContact
);

router.patch(
  "/:id/favorite",
  authenticate,
  isValidId,
  validateEmptyBody("Missing field favorite"),
  validateBody(updateStatusSchema),
  ctrl.updateStatusContact
);

module.exports = router;
