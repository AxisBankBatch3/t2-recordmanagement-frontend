import {applyMiddleware, combineReducers, compose, createStore} from "redux"
import thunk from "redux-thunk"
import { allPolocyDetailsByPanReducer, allPolocyReducer, signInReducer } from "./reducers/UserReducers";

const initialState={

    signInDetails:{
        userInfo:sessionStorage.getItem("userInfo")
        ? JSON.parse(sessionStorage.getItem("userInfo"))
        :null,

        

    }

}

const reducer= combineReducers({

    signInDetails : signInReducer,
    allPolicyDetails : allPolocyReducer,
    getPolicyBypan: allPolocyDetailsByPanReducer,

})

const composeEnhancer = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)))
export default store;