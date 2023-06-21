const mongoose = require("mongoose");

const StudentRegisterationSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
    },
    email: {
      type: String,
    },
    contact: {
      type: String,
    },
    course: {
      type: String,
    },
    price: {
      type: String,
    },
    duration: {
      type: String,
    },
    trainingMode: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("StudentRegisteration", StudentRegisterationSchema);
