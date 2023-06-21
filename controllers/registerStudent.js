const Student = require("../models/StudentRegisteration");

const registerStudent = (req, res) => {
  const { fullName, email, contact, course, price, duration, trainingMode } = req.body;
  try {
    if (!fullName || !contact || !email || !course || !price || !duration || !trainingMode) {
      res.status(400).json({ msg: "Please Fill in all fields" });
      return;
    } else {
      // creating the user
      const student = new Student({
        fullName,
        email,
        contact,
        course,
        price,
        duration,
        trainingMode,
      });
      student.save();
      res.status(201).json(student);
    }
  } catch (error) {
    res.status(500).json({ Err: error.message });
  }
};

const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find().sort({ createdAt: -1 });
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ Err: error.message });
  }
};

module.exports = {
  registerStudent,
  getAllStudents
};
