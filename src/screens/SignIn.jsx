import parseWithOptions from "date-fns/esm/fp/parseWithOptions/index.js";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { userSignin } from "../actions/UserAction";
import img1 from "../img/employer.svg";
import { TextField, Button, Divider } from "@material-ui/core";
import styled from "styled-components";
import { useHistory } from "react-router-dom"
export const SignIn = (props) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const signInDetails = useSelector((state) => state.signInDetails);
  const { userInfo } = signInDetails;
  const history = useHistory();


  // const submitHandler = (event) => {
  //   event.preventDefault();
  //   dispatch(userSignin(username, password));
  //   // props.history.push("/home");
  // };


  const submitHandler = async(event) => {

    event.preventDefault();

   await  dispatch(userSignin(username, password))

   routeUser();

   

}
  // useEffect(() => {
  //   // if (userInfo) {
  //   //   props.history.push("/home");
  //   // }


  //   if(!userInfo.isAdmin){
  //     props.history.push("/home");
  //   }else if(userInfo.isAdmin){
  //     props.history.push("/admindashboard");
  //   }else{
  //     props.history.push("/signin");
  //   }
  // }, [props.history, userInfo, dispatch]);

  const routeUser = () => {
    if(userInfo){
    if(!userInfo.isAdmin){

      props.history.push("/home");

    }else if(userInfo.isAdmin){

      props.history.push("/admindashboard");

    }else{

      props.history.push("/signin");

      }    }}

  return (
    <>

<Parent>
        <div className="row">
          <div className="col-md-6 overflow-hidden">
            <img className="img-fluid " src={img1} alt="" />
          </div>
         
          <div className="col-md-6">
          <form onSubmit={submitHandler}>
            <FormStyle >
              {/* {error ? <Alert severity="error">{error}</Alert> : ""} */}
              <h3 className="mb-4 mt-2">Partner Login</h3>
              <div className="mb-3 mt-3">
                <TextField
                  type="text"
                  id="email"
                  label="Enter Email"
                  variant="outlined"

                  color="primary"
                  fullWidth
                  size="small"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                />
              </div>
              <div className="mt-3 mb-3">
                <TextField
                  type="password"
                  id="password"
                  label="Enter Password"
                  variant="outlined"
                  color="primary"
                  fullWidth
                  size="small"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button
                className="mb-3 mt-3"
                // disabled={loading}
                variant="contained"
                color="primary"
                type="submit"
              >
                LogIn
              </Button>
              <Divider light />
             
              
            </FormStyle>
            </form>
          </div>
          
        </div>
      
       
      </Parent>
    </>
  );
}

const Parent = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FormStyle = styled.div`
  max-width: 500px;
  /* background-color: aqua; */
  padding: 1rem;
`;


















      {/* <form
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
        {/* </div> */}
      {/* </form> */} 
    // </>
  // );
// };
