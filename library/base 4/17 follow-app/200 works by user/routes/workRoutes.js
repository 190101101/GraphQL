const { Router } = require("express");
const workController = require("../controllers/workController");
const {authControl, userControl} = require("../middleware/authMiddleware");

const router = Router();

router.get("/work-add", authControl, workController.work_add_get);
router.post("/work-add", [authControl, userControl], workController.work_add_post);
router.get("/works", [authControl, userControl], workController.works_get);

module.exports = router;
