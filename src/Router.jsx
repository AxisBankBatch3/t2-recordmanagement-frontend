import { Route } from "react-router"
import { AddPolicy } from "./components/AddPolicy"
import { DefaultHome } from "./screens/DefaultHome"
import { Details } from "./screens/Details"

import { Home } from "./screens/Home"
import { SignIn } from "./screens/SignIn"




export const Router=()=>{

    return(
        <>
        <Route path="/policy" component={AddPolicy}></Route>
        <Route path="/home" component={Home}></Route>
         <Route path="/details" component={Details}></Route>
        <Route path="/signin" component={SignIn}></Route>
        <Route exact path="/" component={DefaultHome}></Route>

        </>

    )
}