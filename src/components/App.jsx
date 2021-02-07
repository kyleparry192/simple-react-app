import React from "react";
import {Route, Switch} from "react-router-dom";
import Header from "./common/Header"
import HomePage from "./HomePage";
import CoursesPage from "./CoursesPage";
import AboutPage from "./AboutPage";
import PageNotFound from "./PageNotFound";
import Footer from "./common/Footer";

function App() {
    return (
        <div className="container-fluid">
            <Header/>
            <Switch>
                <Route path={"/"} exact component={HomePage}/>
                <Route path={"/courses"} exact component={CoursesPage}/>
                <Route path={"/about"} exact component={AboutPage}/>
                <Route component={PageNotFound}/>
            </Switch>
            <Footer/>
        </div>
    );
}

export default App;