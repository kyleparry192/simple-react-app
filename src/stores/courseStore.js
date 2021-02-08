import {EventEmitter} from "events";
import Dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";

let courses = [];

class CourseStore extends EventEmitter {
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    getCourses() {
        return courses;
    }

    getCourseBySlug(slug) {
        return courses.find(course => course.slug === slug);
    }
}

const store = new CourseStore();

Dispatcher.register(action => {
    switch (action.actionType) {
        case actionTypes.LOAD_COURSES:
            courses = action.courses;
            store.emitChange();
            break;
        case actionTypes.CREATE_COURSE:
            courses.push(action.course);
            store.emitChange();
            break;
        case actionTypes.UPDATE_COURSE:
            courses = courses.map(course => course.id === action.course.id ? action.course : course);
            store.emitChange();
            break;
        default:
        // do nothing
    }
});

export default store;