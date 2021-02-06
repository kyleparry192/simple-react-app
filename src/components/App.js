import React from "react";
import {Route, Switch} from "react-router-dom";
import Header from "./common/Header"
import HomePage from "./HomePage";
import CoursesPage from "./CoursesPage";
import AboutPage from "./AboutPage";
import PageNotFound from "./PageNotFound";

function App() {
    return (
        <div className="container-fluid">
            <Header/>
            <Switch>
                <Route path={"/"} exact={true} component={HomePage}/>
                <Route path={"/courses"} component={CoursesPage}/>
                <Route path={"/about"} component={AboutPage}/>
                <Route component={PageNotFound}/>
            </Switch>
        </div>
    );
}

export default App;