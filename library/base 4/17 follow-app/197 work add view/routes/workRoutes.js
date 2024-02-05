const { Router } = require("express");
const workController = require("../controllers/workController");
const {authControl} = require("../middleware/authMiddleware");

const router = Router();

router.get("/add", authControl, workController.work_add_get);

module.exports = router;
