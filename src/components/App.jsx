import React from "react";
import {Route, Switch} from "react-router-dom";
import Header from "./common/Header"
import HomePage from "./HomePage";
import CoursesPage from "./CoursesPage";
import AboutPage from "./AboutPage";
import PageNotFound from "./PageNotFound";
import Footer from "./common/Footer";
import ManageCoursePage from "./ManageCoursePage";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

function App() {
    return (
        <div className="container-fluid">
            <ToastContainer autoClose={3000} hideProgressBar/>
            <Header/>
            <Switch>
                <Route exact path={"/"} component={HomePage}/>
                <Route exact path={"/courses"} component={CoursesPage}/>
                <Route exact path={"/course/:slug"} component={ManageCoursePage}/>
                <Route exact path={"/course"} component={ManageCoursePage}/>
                <Route exact path={"/about"} component={AboutPage}/>
                <Route component={PageNotFound}/>
            </Switch>
            <Footer/>
        </div>
    );
}

export default App;