import logo from "./logo.svg";
import "./App.css";
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router";
import { NavBar } from "./components/NavBar";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { AddPolicy } from "./components/AddPolicy";
import { DefaultHome } from "./screens/DefaultHome";
import { Details } from "./screens/Details";

import { Home } from "./screens/Home";
import { SignIn } from "./screens/SignIn";
import { Admindashboard } from "./screens/admindashboard";
import AddPartner from "./components/Addpartner";


function App() {
  return (
    <BrowserRouter>
      {/* <Route component={NavBar}></Route> */}
      <NavBar />
      <br />
      <Route path="/admindashboard" component={Admindashboard}></Route>
      <Route path="/addpartner" component={AddPartner}></Route>


      <Route path="/policy" component={AddPolicy}></Route>      
      <Route path="/home" component={Home}></Route>
      <Route path="/details" component={Details}></Route>
      <Route path="/signin" component={SignIn}></Route>
      <Route exact path="/" component={DefaultHome}></Route>

      {/* <div
        className="container"
        style={{
          borderRadius: "5px",
          marginTop: "100px",
          marginBottom: "50px",
          padding: "10px",
        }}
      >
        <Router />
      </div> */}
    </BrowserRouter>
  );
}

export default App;
