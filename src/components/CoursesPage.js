import React, {useEffect, useState} from "react";
import {getCourses} from "../api/courseApi";

function CoursesPage() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        getCourses().then(courses => setCourses(courses))
    });

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