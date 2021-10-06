import { GET_ALL_POLICIES_FAIL, GET_ALL_POLICIES_REQUEST, GET_ALL_POLICIES_SUCCESS, GET_POLICY_BY_PAN_FAIL, GET_POLICY_BY_PAN_REQUEST, GET_POLICY_BY_PAN_SUCCESS, SIGN_IN_FAIL, SIGN_IN_REQUEST, SIGN_IN_SUCCESS, USER_SIGNOUT } from "../constants/AllConstants"
import baseAPI from "../BaseAPI"
import Axios from "axios"
export const userSignin = (username, password) => async (dispatch) => {

    dispatch({
        type: SIGN_IN_REQUEST
    })

    try {
        const { data } = await Axios.post(`${baseAPI.USER_API}/signin`, { username, password })
      
        
        dispatch({
            type: SIGN_IN_SUCCESS,
            payload: data
        })
        sessionStorage.setItem("userInfo",JSON.stringify(data))

    } catch (error) {

        dispatch({
            type: SIGN_IN_FAIL,
            payload : 
            error.response && error.response.data.message ? error.response.data.message : error.message,
        })

    }

 }


export const signout=()=>(dispatch)=>{
    sessionStorage.clear()
    dispatch({
        type : USER_SIGNOUT
    })


}



export const allPolocyDetails = () => async (dispatch,getState) => {

    dispatch({
        type: GET_ALL_POLICIES_REQUEST
    })
    const { signInDetails: { userInfo } } = getState()
    try {
        const { data } = await Axios.get(`${baseAPI.DOCUMENT_API}/policyholders`,
        {
            
            headers: { 
                Authorization: `Bearer ${userInfo.token}`
            
            }
        })
      
        
        dispatch({
            type: GET_ALL_POLICIES_SUCCESS,
            payload: data
        })
        

    } catch (error) {

        dispatch({
            type: GET_ALL_POLICIES_FAIL,
            payload : 
            error.response && error.response.data.message ? error.response.data.message : error.message,
        })

    }

}


export const allPolocyDetailsByPan = (_id) => async (dispatch,getState) => {

    dispatch({
        type: GET_POLICY_BY_PAN_REQUEST
    })
    const { signInDetails: { userInfo } } = getState()
    try {
        const { data } = await Axios.get(`${baseAPI.DOCUMENT_API}/policyholder/${_id}`,
        {
            
            headers: { 
                Authorization: `Bearer ${userInfo.token}`
            
            }
        })
      
        
        dispatch({
            type: GET_POLICY_BY_PAN_SUCCESS,
            payload: data
        })
        

    } catch (error) {

        dispatch({
            type: GET_POLICY_BY_PAN_FAIL,
            payload : 
            error.response && error.response.data.message ? error.response.data.message : error.message,
        })

    }

}

