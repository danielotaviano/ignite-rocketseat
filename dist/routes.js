"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCourse = void 0;
var create_course_service_1 = require("./create-course-service");
function createCourse(request, response) {
    create_course_service_1.createCourseService.execute('nodejs', 10, 'Dani');
    return response.send();
}
exports.createCourse = createCourse;
