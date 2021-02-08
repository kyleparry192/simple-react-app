import React, {useEffect, useState} from "react";
import CourseForm from "./CourseForm";
import courseStore from "../stores/courseStore";
import {toast} from "react-toastify";
import * as courseActions from "../actions/courseActions";

const ManageCoursePage = props => {
    const [errors, setErrors] = useState({});
    const [courses, setCourses] = useState(courseStore.getCourses());
    const [course, setCourse] = useState({
        id: null,
        slug: "",
        title: "",
        authorId: null,
        category: ""
    });

    useEffect(() => {
        courseStore.addChangeListener(onChange);
        const slug = props.match.params.slug; // from the path `/courses/:slug`
        if (courses.length === 0) {
            courseActions.loadCourses();
        } else if (slug) {
            setCourse(courseStore.getCourseBySlug(slug));
        }
        return () => courseStore.removeChangeListener(onChange);
    }, [courses.length, props.match.params.slug]);

    function onChange() {
        setCourses(courseStore.getCourses());
    }

    function handleChange({target}) {
        setCourse({
            ...course,
            [target.name]: target.value
        });
    }

    function isFormValid() {
        const errors = {};

        if (!course.title) errors.title = "Title is required";
        if (!course.authorId) errors.authorId = "Author ID is required";
        if (!course.category) errors.category = "Category is required";

        setErrors(errors);

        return Object.keys(errors).length === 0;
    }

    function handleSubmit(event) {
        event.preventDefault(); // prevents form from posting back to server
        if (!isFormValid()) return;
        courseActions.saveCourse(course).then(() => {
            props.history.push("/courses");
            toast.success("Course saved.");
        });
    }

    return (
        <>
            <h2>Manage Course</h2>
            <CourseForm
                errors={errors}
                course={course}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
        </>
    );
};

export default ManageCoursePage;