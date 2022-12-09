import React from "react";
import { Route, Switch, NavLink, Redirect } from "react-router-dom";

import Users from "./Users/Users";
import Courses from "./Courses/Courses";
import Home from "./Home/Home";
import ErrorPage from "./ErrorPage";

const root = (props) => {
  return (
    <div>
      <header>
        <nav>
          <ul style={{ listStyle: "none", margin: "auto", padding: "0" }}>
            <li style={{ margin: "10px", display: "inline-block" }}>
              <NavLink to="/courses">Courses</NavLink>
            </li>
            <li style={{ margin: "10px", display: "inline-block" }}>
              <NavLink to="/users">Users</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Redirect from="all-courses" to="/courses" />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/users" component={Users} />
        <Route path="/courses" component={Courses} />
        {/* <Route path="/courses/:id" component={Course} /> */}
        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
};

export default root;
