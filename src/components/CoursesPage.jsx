import React, {useEffect, useState} from "react";
import courseStore from "../stores/courseStore";
import {loadCourses} from "../actions/courseActions";
import CourseList from "./CourseList";

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
        <>
            <h1>Courses</h1>
            <CourseList courses={courses}/>
        </>
    )
}

export default CoursesPage;