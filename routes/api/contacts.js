const express = require("express")

const { validateBody } = require("../middlewares/validateBody");
const { isValidId } = require("../middlewares/isValidId");
const { addSchema, updateSchema } = require("../../models/contacts");

const {
  getAll,
  getById,
  add,
  updateById,
  deleteById,
  updateFavoriteStatus,
} = require("../../controlers/contacts");

const router = express.Router();

router.get("/", getAll);
router.get("/:contactId", getById);
router.post("/", validateBody(addSchema), add);
router.put("/:contactId", isValidId, validateBody(updateSchema), updateById);
router.delete("/:contactId", isValidId, deleteById);
router.patch("/:contactId", isValidId, updateFavoriteStatus);

module.exports = router;
