const handlerFactory = require("./handlerFactory");
const Course = require("./../models/course");

module.exports.createCourse = handlerFactory.createOne(Course);
module.exports.allCourses = handlerFactory.getAll(Course);
module.exports.findOneCourse = handlerFactory.getOne(Course);
module.exports.updateCourse = handlerFactory.updateOne(Course);
module.exports.deleteCourse = handlerFactory.deleteOne(Course);
