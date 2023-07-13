const express = require("express");
const router = express.Router();

const {
  create,
  readAll,
  getOne,
  updateOne,
  deleteOne,
} = require("../controllers/entry-controller");

router.get("/", readAll);
router.post("/", create);
router.get(":id", getOne);
router.put("/:id", updateOne);
router.delete("/:id", deleteOne);

module.exports = { router };
