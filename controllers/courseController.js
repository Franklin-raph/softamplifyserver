const Course = require("../models/course");
const mongoose = require("mongoose")

const registerCourse = (req, res) => {
  const { courseTitle, courseDuration, courseDescription, coursePrice } = req.body;
  try {
    if (!courseTitle || !courseDuration || !courseDescription || !coursePrice) {
      res.status(400).json({ msg: "Please Fill in all fields" });
      return;
    } else {
      // creating the course
      const course = new Course({
        courseTitle,
        courseDuration,
        courseDescription,
        coursePrice,
      });
      course.save();
      res.status(201).json(course);
    }
  } catch (error) {
    res.status(500).json({ Err: error.message });
  }
};

const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find().sort({ createdAt: -1 });
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ Err: error.message });
  }
};

// update my Course
const updateCourse = async (req, res) => {

    const {courseId} = req.params
    console.log(courseId)
    try {

        if(!mongoose.Types.ObjectId.isValid(courseId)) return res.status(404).json({Err: "Course not found"})

        const updatedCourse = await Course.findOneAndUpdate({_id: courseId}, {
            ...req.body
        }, {new: true})

        res.status(200).json(updatedCourse)
    } catch (error) {
        res.status(500).json({Err: error.message})
    }
}

// get a single Course
const getASingleCourse = async (req, res) => {

    const {courseId} = req.params
    console.log(courseId)
    try {

        if(!mongoose.Types.ObjectId.isValid(courseId)) return res.status(404).json({Err: "Course not found"})

        const updatedCourse = await Course.findById({_id: courseId})

        res.status(200).json(updatedCourse)
    } catch (error) {
        res.status(500).json({Err: error.message})
    }
}


// delete my Course
const deleteCourse = async (req, res) => {

    const {courseId} = req.params
    console.log(courseId)
    try {

        if(!mongoose.Types.ObjectId.isValid(courseId)) return res.status(404).json({Err: "Course not found"})

        await Course.findOneAndDelete({_id: courseId})

        res.status(200).json({msg:"Course Has been successfully deleted"})
    } catch (error) {
        res.status(500).json({Err: error.message})
    }
}

module.exports = {
  registerCourse,
  getAllCourses,
  updateCourse,
  deleteCourse,
  getASingleCourse
};
