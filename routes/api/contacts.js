const express = require("express");

const ctrl = require("../../controllers/contacts");

const {
  validateBody,
  isValidId,
  validateEmptyBody,
} = require("../../middlewares");

const { addSchema, updateStatusSchema } = require("../../models/contact");

const router = express.Router();

router.get("/", ctrl.listContacts);

router.get("/:id", isValidId, ctrl.getContactById);

router.post(
  "/",
  validateEmptyBody("Missing fields"),
  validateBody(addSchema),
  ctrl.addContact
);

router.delete("/:id", isValidId, ctrl.removeContact);

router.put(
  "/:id",
  validateEmptyBody("Missing fields"),
  isValidId,
  validateBody(addSchema),
  ctrl.updateContact
);

router.patch(
  "/:id/favorite",
  isValidId,
  validateEmptyBody("Missing field favorite"),
  validateBody(updateStatusSchema),
  ctrl.updateStatusContact
);

module.exports = router;
