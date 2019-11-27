/* global document */
/* global UserDb */
/* global CourseDb */
/* global loadAllCoursesList */
/* global pug */
/* global Path */

let newCourseStudents = [];

async function updateCourse(valueToUpdate) {
    // TODO
}

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

        const students = newCourseStudents;
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

        newCourseStudents = [];
    }
}

async function addStudentToCourse() {
    // TODO
}

async function addStudentToNewCourse() {
    const newStudent = document.getElementById("newCourseStudentUserName").value;
    const table = document.getElementById("NewCourseStudents").getElementsByClassName("ScrollingBox")[0].firstChild;

    if (!newCourseStudents.includes(newStudent)) {
        const row = table.insertRow(0);
        const cell0 = row.insertCell(0);
        const cell1 = row.insertCell(1);
        const cell2 = row.insertCell(2);

        const studentInfo = await UserDb.getUserWithId(newStudent);
        cell0.innerHTML = studentInfo[0].username;
        cell1.innerHTML = studentInfo[0].username;
        cell2.innerHTML = newStudent;

        newCourseStudents.push(newStudent);
    }
}
