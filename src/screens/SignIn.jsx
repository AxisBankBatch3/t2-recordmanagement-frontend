import parseWithOptions from "date-fns/esm/fp/parseWithOptions/index.js";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { userSignin } from "../actions/UserAction";

export const SignIn = (props) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const signInDetails = useSelector((state) => state.signInDetails);
  const { userInfo } = signInDetails;

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(userSignin(username, password));
    // props.history.push("/home");
  };
  useEffect(() => {
    if (userInfo) {
      props.history.push("/home");
    }
  }, [props.history, userInfo, dispatch]);

  return (
    <>
      <form
        onSubmit={submitHandler}
        style={{
          border: "1px solid",
          borderRadius:"5px",
          padding: "30px",
          marginLeft: "30%",
          marginRight: "25%",
          marginTop:"70px"
        }}
      >
        <div class="form-outline mb-2">
          <label class="form-label" for="form1Example1">
            Email Id
          </label>
          <input
            type="email"
            id="form1Example1"
            class="form-control"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>

        <div class="form-outline mb-2">
          <label class="form-label" for="form1Example2">
            Password
          </label>

          <input
            type="password"
            id="form1Example2"
            class="form-control"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div><br></br>

        <button
          type="submit"
          class="btn btn-success btn-block"
          style={{ marginLeft: "40%" }}
        >
          Sign In
        </button>

        <div
          class="form-outline mb-2"
          style={{ display: "flex", justifyContent: "center" }}
        >
          {/* <Link class="form-label" for="form1Example2">
            Forget Password
          </Link> */}
        </div>
      </form>
    </>
  );
};
