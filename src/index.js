/*

=========================================================
* Now UI Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-react
* Copyright 2019 Creative Tim (http://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-react/blob/master/LICENSE.md)

* Designed by www.invisionapp.com Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles for this kit

// pages for this kit


import LoginPage from "./pages/LoginPage.js";
import signupPage from './pages/signupPage.js';
import dashboard from './pages/dashboard.js'
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Switch>
        
        
        
       <Route path='/signup' component={signupPage} />
        <Route path="/login" render={props => <LoginPage {...props} />} />
        <Route path="/dashboard" component={dashboard} />} />

        <Redirect from="/" to="/login" />
      </Switch>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
