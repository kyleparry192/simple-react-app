import React, {useEffect, useState} from "react";
import courseStore from "../stores/courseStore";
import {loadCourses} from "../actions/courseActions";
import CourseList from "./CourseList";
import {Link} from "react-router-dom";

function CoursesPage() {
    const [courses, setCourses] = useState(courseStore.getCourses());

    useEffect(() => {
        courseStore.addChangeListener(onChange);
        if (courseStore.getCourses().length === 0) {
            loadCourses();
        }
        return () => courseStore.removeChangeListener(onChange);
    });

    function onChange() {
        setCourses(courseStore.getCourses());
    }

    return (
        <div>
            <h1>Courses</h1>
            <Link className="btn btn-primary" to="/course">Add Course</Link>
            <CourseList courses={courses}/>
        </div>
    )
}

export default CoursesPage;