/* global document */
/* global UserDb */
/* global CourseDb */
/* global loadAllCoursesList */

async function saveNewCourse(){
    const courseName = document.getElementById("newCourseName").value;
    const grade = document.getElementById("newCourseGrade").value;
    const teacherName = document.getElementById("newCourseTeacherUserName").value;
    const teacher = await UserDb.getUser(teacherName);

    //TODO: Add Students
    const students = [];
    const teacherId = teacher._id;

    await CourseDb.createCourse(courseName, grade, teacherId, students);

    await loadAllCoursesList();
}