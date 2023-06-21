const express = require("express")
const router = express.Router()
const {registerCourse, getAllCourses, updateCourse, deleteCourse, getASingleCourse} = require("../controllers/courseController")

router.post("/register-course", registerCourse)
router.get("/all-courses", getAllCourses)
router.patch("/update-course/:courseId", updateCourse)
router.delete("/delete-course/:courseId", deleteCourse)
router.get("/get-a-course/:courseId", getASingleCourse)

module.exports = router;