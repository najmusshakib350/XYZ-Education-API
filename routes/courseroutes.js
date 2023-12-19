const express = require("express");
const {
  createCourse,
  allCourses,
  findOneCourse,
  updateCourse,
  deleteCourse,
} = require("./../controllers/courseController");
const { protect, restrictTo } = require("../controllers/authController");
const router = express.Router();

router
  .route("/")
  .post(protect, restrictTo("admin"), createCourse)
  .get(allCourses);
router.route("/:id").get(findOneCourse);
router.route("/:id").patch(protect, restrictTo("admin"), updateCourse);
router.route("/:id").delete(protect, restrictTo("admin"), deleteCourse);

module.exports = router;
