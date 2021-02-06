import React, {useEffect, useState} from "react";
import courseStore from "../stores/courseStore";
import {loadCourses} from "../actions/courseActions";

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
            <table className={"table"}>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Author ID</th>
                    <th>Category</th>
                </tr>
                </thead>
                <tbody>
                {courses.map(course => {
                    return (
                        <tr key={course.id}>
                            <td>{course.title}</td>
                            <td>{course.authorId}</td>
                            <td>{course.category}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </>
    )
}

export default CoursesPage;