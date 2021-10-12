import axios from "axios";
import React from "react";
import { Fragment } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { Col, Row } from "react-bootstrap";

const AddPartner = () => {
  useEffect(() => {
    document.title = "Add partners";
  }, []);

  const [user, setuser] = useState({});

  //formhandler function
  const handleForm = (e) => {
    console.log(user);
    postDatatoServer(user);

    e.preventDefault();
    alert("Successfully added!");
  };

  //createing function to post data on server
  const postDatatoServer = (user) => {
    // axios.post(`http://payrollnew-env.eba-mipw2tw3.ap-south-1.elasticbeanstalk.com/api/auth/signup`,user).then(
    axios.post(`http://localhost:5000/api/auth/addpartner`, user).then(
      (response) => {
        console.log(response);
        console.log("success");
        toast.success("User added successfully");
      },
      (error) => {
        console.log(error);
        console.log("error");
        toast.error("Something went wrong!");
      }
    );
  };

  return (
    <Fragment>
      {/* <AdminSideBar /> */}

      <Row>
        <br />
        <Col md={{ span: 8, offset: 3 }}>
          <Link to="/admindashboard">
            <button type="button" class="btn btn-primary float-left ">
              Back
            </button>
          </Link>
        </Col>
      </Row>

      <center>
        <br />
        <br />

        <div className="col-4">
          <form name="login" id="login" onSubmit={handleForm}>
            <h3>Add partner</h3>
            <div className="form-group">
              <label>Fullname</label>
              <input
                type="name"
                className="form-control"
                placeholder="Enter name"
                name="name"
                id="name"
                onChange={(e) => {
                  setuser({ ...user, fullName: e.target.value });
                }}
                required
              />
            </div>
            <br />
            <div className="form-group">
              <label>Organization</label>
              <input
                type="text"
                className="form-control"
                placeholder="organization name"
                onChange={(e) => {
                  setuser({ ...user, organization: e.target.value });
                }}
                required
              />
            </div>
            <br />
            <div className="form-group">
              <label>Username</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter username"
                name="emailId"
                id="emailId"
                onChange={(e) => {
                  setuser({ ...user, username: e.target.value });
                }}
                required
              />
            </div>
            <br />
            <div className="form-group">
              <label>Mobile</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter mobile"
                onChange={(e) => {
                  setuser({ ...user, mobile: e.target.value });
                }}
                required
              />
            </div>
            <br />
            <div className="form-group">
              <label>password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                name="name"
                id="name"
                onChange={(e) => {
                  setuser({ ...user, password: e.target.value });
                }}
                required
              />
            </div><br/>

            <div className="form-group">
              <label>access</label>
              <br />
              <input
                type="radio"
                id="html"
                name="fav_language"
                value="false"
                onChange={(e) => {
                  setuser({ ...user, isAdmin: e.target.value });
                }}
              />
              &nbsp;
              <label for="html">partner</label>&nbsp; &nbsp;
              <input
                type="radio"
                id="css"
                name="fav_language"
                value="true"
                onChange={(e) => {
                  setuser({ ...user, isAdmin: e.target.value });
                }}
              />
              &nbsp;
              <label for="css">admin</label>&nbsp; &nbsp;
              <input
                type="radio"
                id="javascript"
                name="fav_language"
                value="others"
                onChange={(e) => {
                  setuser({ ...user, isAdmin: e.target.value });
                }}
              />
              &nbsp;
              <label for="javascript">auditor</label>
            </div>
            <br />
            <br />

            <br />

            <button type="submit" className="btn btn-success btn-lg btn-block">
              Add partner
            </button>
          </form>
        </div>
      </center>
    </Fragment>
  );
};

export default AddPartner;
