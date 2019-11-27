/* global document */
/* global UserDb */
/* global pug */
/* global Path */
/* global CourseDb */
/* global UserDb */
/* global loadCourseStudentListTeacher */

async function loadCourseStudentList(course) {
    const pugPath = Path.relative(process.cwd(), "./src/gui/pug/ViewStudentsScrollTable.pug");
    const compiledFunction = pug.compileFile(pugPath);

    let courseId = "";

    if (course === undefined) {
        const courses = await CourseDb.getCourses();
        if (courses[0] !== undefined) {
            courseId = await CourseDb.getCourseId(courses[0]);
        }
    }
    else {
        courseId = await CourseDb.getCourseId(course);
    }

    let students = await CourseDb.getStudents(courseId);
    students = students === undefined ? [] : students;

    const studentTable = [];
    for (let i = 0; i < students.length; i++) {
        // eslint-disable-next-line no-await-in-loop
        students[i] = await UserDb.getUserWithId(students[i]);
        students[i] = [students[i][0].username, students[i][0].username, students[i][0].username];
        studentTable.push(students[i][0]);
    }

    const scrolledTable = compiledFunction({
        students
    });
    document.getElementById("CourseViewStudents").innerHTML = scrolledTable;

    // Load all students into select option for
    const allStudents = await UserDb.getUsers("student");
    for (let i = 0; i < allStudents.length; i++) {
        const newCourseSelect = document.getElementById("newCourseStudentUserName");
        const existingCourseSelect = document.getElementById("existingCourseStudentUserName");
        const newOption = document.createElement("option");
        newOption.value = allStudents[i]._id;
        newOption.text = allStudents[i].username;
        const existingOption = document.createElement("option");
        existingOption.value = allStudents[i]._id;
        existingOption.text = allStudents[i].username;

        newCourseSelect.add(newOption);
        existingCourseSelect.add(existingOption);
    }
}

async function loadAllCoursesList() {
    const pugPath = Path.relative(process.cwd(), "./src/gui/pug/helpers/ListViewSelect.pug");
    const compiledFunction = pug.compileFile(pugPath);
    const courses = await CourseDb.getCourses();
    const listView = compiledFunction({
        rows: courses
    });
    document.getElementById("AdminCoursesList").innerHTML = listView;
}

async function loadAllTeachersList() {
    const pugPath = Path.relative(process.cwd(), "./src/gui/pug/helpers/ListView.pug");
    const compiledFunction = pug.compileFile(pugPath);
    const teachers = await UserDb.getUsers("teacher");
    const teacherNames = [];
    for (let i = 0; i < teachers.length; i++) {
        teacherNames.push(teachers[i].username);
    }
    const listView = compiledFunction({
        rows: teacherNames
    });
    document.getElementById("AdminTeachersList").innerHTML = listView;
}

async function loadAllStudentsList() {
    const pugPath = Path.relative(process.cwd(), "./src/gui/pug/helpers/ListView.pug");
    const compiledFunction = pug.compileFile(pugPath);

    const students = await UserDb.getUsers("student");
    const studentNames = [];
    for (let i = 0; i < students.length; i++) {
        studentNames.push(students[i].username);
    }
    const listView = compiledFunction({
        rows: studentNames
    });
    document.getElementById("AdminStudentsList").innerHTML = listView;
}

async function loadInfo(info) {
    if (await CourseDb.courseExists(info)) {
        await loadCourseStudentList(info);
        await loadCourseStudentListTeacher(info);
    }
    else if (await UserDb.userExists(info)) {
        // TODO
    }
}

async function validateInput(course, grade, teacher) {
    document.getElementById("adminSaveNewCourse").disabled = !(course && grade && teacher);
}
