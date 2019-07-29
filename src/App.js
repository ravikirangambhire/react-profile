import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";
import Dashboard from "./Dashboard/Dashboard";
export default class App extends React.Component{
      render(){
        return(
          <Router>
            <div>
              <Route path="/" component={Dashboard}></Route>
              
            </div>
          </Router>
        )
      };
};