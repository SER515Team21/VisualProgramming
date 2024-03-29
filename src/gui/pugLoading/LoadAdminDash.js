/* global document */
/* global UserDb */
/* global pug */
/* global Path */
/* global CourseDb */
/* global UserDb */
/* global loadCourseStudentListTeacher */
/* global window */
/* global loadCourseAssignmentListTeacher */

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
        students[i] = [students[i].username, students[i].username, students[i].username];
        studentTable.push(students[i]);
    }

    const scrolledTable = compiledFunction({
        students
    });
    document.getElementById("CourseViewStudents").innerHTML = scrolledTable;
    document.getElementById("CourseEditorStudents").innerHTML = scrolledTable;

    if (course !== undefined) {
        document.getElementById("editCourseName").value = course;
        document.getElementById("editCourseGrade").value =
            parseInt(await CourseDb.getCourseGrade(course), 10);
        const teacherId = await CourseDb.getCourseTeacherId(course);
        const teacher = await UserDb.getUserWithId(teacherId);
        document.getElementById("editCourseTeacherName").value = teacher.username;

        document.getElementById("CurrentCourseName").innerText = course;
        document.getElementById("CurrentCourseTeacher").innerText = teacher.username;
        document.getElementById("CurrentCourseGrade").innerText =
            await CourseDb.getCourseGrade(course);
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
    const teacherPugObjects = [];
    for (let i = 0; i < teachers.length; i++) {
        teacherPugObjects.push({ value: teachers[i].username, data: teachers[i]._id });
    }
    const listView = compiledFunction({
        func: "loadATeacherAdminPage",
        rows: teacherPugObjects
    });
    document.getElementById("AdminTeachersList").innerHTML = listView;
}

async function loadATeacherAdminPage(id) {
    const pugPath = Path.relative(process.cwd(), "./src/gui/pug/TeacherViewAdminPage.pug");
    const compiledFunction = pug.compileFile(pugPath);
    const teach = await UserDb.getUserWithId(id);
    const teacherpages = compiledFunction({
        teacher: teach
    });
    document.getElementById("AdminTeacherViews").innerHTML = teacherpages;
}

async function loadAllStudentsList() {
    const pugPath = Path.relative(process.cwd(), "./src/gui/pug/helpers/ListView.pug");
    const compiledFunction = pug.compileFile(pugPath);

    const students = await UserDb.getUsers("student");
    const studentPugObjects = [];
    for (let i = 0; i < students.length; i++) {
        studentPugObjects.push({ value: students[i].username, data: students[i]._id });
    }
    const listView = compiledFunction({
        rows: studentPugObjects,
        func: "loadAStudentAdminPage"
    });
    document.getElementById("AdminStudentsList").innerHTML = listView;
}

async function loadAStudentAdminPage(id) {
    const pugPath = Path.relative(process.cwd(), "./src/gui/pug/StudentViewAdminPage.pug");
    const compiledFunction = pug.compileFile(pugPath);
    const stud = await UserDb.getUserWithId(id);
    const studentpages = compiledFunction({
        student: stud
    });
    document.getElementById("AdminStudentViews").innerHTML = studentpages;
}

async function loadInfo(info) {
    if (await CourseDb.courseExists(info)) {
        window.localStorage.setItem("currentCourse", info);
        await loadCourseStudentList(info);
        await loadCourseStudentListTeacher(info);
        await loadCourseAssignmentListTeacher(info);
    }
    else if (await UserDb.userExists(info)) {
        // TODO
    }
}

async function validateInput(course, grade, teacher) {
    document.getElementById("adminSaveNewCourse").disabled = !(course && grade && teacher);
}

async function updateUser(id, userType) {
    const user = await UserDb.getUserWithId(id);

    const username = document.getElementById(`edit${userType}UserName`).value;
    const role = document.getElementById(`teacherChoiceRadio${userType}`).checked ? "teacher" : "student";
    const enabled = document.getElementById(`enabledChoiceRadio${userType}`).checked ? "1" : "0";
    const firstname = document.getElementById(`edit${userType}FirstName`).value;
    const lastname = document.getElementById(`edit${userType}LastName`).value;

    await UserDb.updateUser(id, username, user.password, role, enabled,
        firstname, lastname);
    if (role === "student") {
        loadAStudentAdminPage(id);
        loadATeacherAdminPage("");
    }
    else if (role === "teacher") {
        loadATeacherAdminPage(id);
        loadAStudentAdminPage("");
    }
    loadAllStudentsList();
    loadAllTeachersList();
}
