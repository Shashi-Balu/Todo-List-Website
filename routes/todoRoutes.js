const express = require("express");
const todoController = require("../controllers/todoControllers");

const router = express.Router();

router.get("/", todoController.todo_index);
router.post("/", todoController.todo_create_post);
router.get("/create", todoController.todo_create_get);
router.get("/:id", todoController.todo_details);
router.delete("/:id", todoController.todo_delete);
// router.get("/motivation", motivationController.getMotivation);
module.exports = router;
