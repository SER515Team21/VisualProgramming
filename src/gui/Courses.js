/* global document */
/* global UserDb */
/* global CourseDb */
/* global loadAllCoursesList */

async function saveNewCourse(){
    const courseName = document.getElementById("newCourseName").value;
    const grade = document.getElementById("newCourseGrade").value;
    const teacherName = document.getElementById("newCourseTeacherName").value;

    //TODO: Add Students
    const students = [];
    const teacherId = await UserDb.getUser(teacherName)._id;

    await CourseDb.createCourse(courseName, grade, teacherId, students);

    loadAllCoursesList();
}