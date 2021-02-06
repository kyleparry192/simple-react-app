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

    getCourseById(id) {
        return courses.find(course => course.id === id);
    }
}

const STORE = new CourseStore();

Dispatcher.register(action => {
    switch (action.actionType) {
        case actionTypes.LOAD_COURSES:
            courses = action.courses;
            STORE.emitChange();
            break;
        case actionTypes.CREATE_COURSE:
            courses.push(action.course);
            STORE.emitChange();
            break;
    }
});

export default STORE;