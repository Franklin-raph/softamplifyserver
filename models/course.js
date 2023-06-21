const mongoose = require("mongoose")

const CourseSchema = mongoose.Schema({
    courseTitle: {
        type: String
    },
    courseDuration: {
        type: String
    },
    courseDescription: {
        type: String
    },
    coursePrice: {
        type: String
    }
})

module.exports = mongoose.model("Course", CourseSchema)