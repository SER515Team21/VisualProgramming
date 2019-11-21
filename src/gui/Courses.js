/* global document */
/* global UserDb */
/* global CourseDb */
/* global loadAllCoursesList */

async function saveNewCourse() {
    const courseName = document.getElementById("newCourseName").value;
    const grade = document.getElementById("newCourseGrade").value;
    const teacherName = document.getElementById("newCourseTeacherUserName").value;
    const teacher = await UserDb.getUser(teacherName);

    if (teacher === undefined || teacher.role !== "teacher") {
        document.getElementById("teacherError").hidden = false;
    }
    else {
        document.getElementById("teacherError").hidden = true;

        // TODO: Add Students
        const students = [];
        const teacherId = teacher._id;

        const result = await CourseDb.createCourse(courseName, grade, teacherId, students);

        if (result) {
            document.getElementById("newCourseError").hidden = true;
            await loadAllCoursesList();
        }
        else {
            document.getElementById("newCourseError").hidden = false;
        }

        await loadAllCoursesList();
    }
}
