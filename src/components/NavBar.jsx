import { parseWithOptions } from "date-fns/fp";
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { signout } from "../actions/UserAction";

export const NavBar = (props) => {
  const dispatch = useDispatch();
  const signInDetails = useSelector((state) => state.signInDetails);
  const { userInfo } = signInDetails;

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-primary bg-dark d-flex">
        <div className="container   ">
          <span className="navbar-brand">
            <NavLink
              className="navBarBrand"
              activeClassName="navBarBrandActive"
              to="/"
            >
              <img src="images/bank.png" alt="" style={{ width: "1.5rem" }} />{" "}
              Delta Bank
            </NavLink>
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse navButtons"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              {userInfo ? (
                <>
                  <p className="nav-link active" aria-current="page">
                    <NavLink
                      to="#"
                      className="navButton"
                      activeClassName="navButtonActive"
                    >
                      Add Partner
                    </NavLink>
                  </p>
                  <p
                    className="nav-link"
                    // onClick={() => props.history.push("/policy")}
                  >
                    <NavLink
                      to="/policy"
                      className="navButton"
                      activeClassName="navButtonActive"
                    >
                      Add Policy
                    </NavLink>{" "}
                  </p>
                </>
              ) : (
                ""
              )}
              {userInfo ? (
                <p
                  onClick={() => {
                    dispatch(signout());
                    window.location.reload();
                  }}
                  className="nav-link"
                >
                  <NavLink
                    className="navButton"
                    activeClassName="navButtonActive"
                    to="#"
                  >
                    Sign out
                  </NavLink>
                </p>
              ) : (
                <p
                 
                >
                    <NavLink
                    className="navButton"
                    activeClassName="navButtonActive"
                    to="/signin">
                        Login
                </NavLink>
                </p>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* <nav className="navbar navbar-expand-lg navbar-primary bg-primary fixed-top">
        <div className="container-fluid">
          {userInfo ? (
            <>
              <div className="d-grid gap-2 col-1.5" style={{ marginRight: "10px" }}>
                <button type="button" className="btn btn-outline-light">
                  Add Partner
                </button>
              </div>

              <div className="d-grid gap-2 col-1.5" style={{ marginRight: "10px" }}>
                <button type="button" className="btn btn-outline-light">
                  Add Policy
                </button>
              </div>
            </>
          ) : null}

          {userInfo ? (
            <div className="d-grid gap-2 col-1 ">
              <button type="button" className="btn btn-outline-light">
                Sign out
              </button>
            </div>
          ) : (
            <div className="d-grid gap-2 col-1 ">
              <button type="button" className="btn btn-primary btn-rounded">
                Sign In
              </button>
            </div>
          )}
        </div>
      </nav> */}
    </React.Fragment>
  );
};
