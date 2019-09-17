import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TimeLine from "./components/timeline";
import NotFound from "./components/notfound";
import Register from "./components/register";
import Login from "./components/login";
import SinglePost from "./components/singlepost";
import { Switch, Route } from "react-router-dom";
import ForgotPassword from "./components/forgotpassword";
import ResetPassword from "./components/resetpassword";
import NavBar from "./components/navbar";
import Header1 from "./components/header1";
import Footer from "./components/footer";
import Header from "./components/header";

function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <Switch>
        <Route exact path={"/"} component={Register} />
        <Route exact path={"/login"} component={Login} />
        <Route exact path={"/timeline"} component={TimeLine} />
        <Route exact path={"/singlepost"} component={SinglePost} />
        <Route exact path={"/forgotpassword"} component={ForgotPassword} />
        <Route exact path={"/resetpassword"} component={ResetPassword} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
}
export default App;
