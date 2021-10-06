import { GET_ALL_POLICIES_FAIL, GET_ALL_POLICIES_REQUEST, GET_ALL_POLICIES_SUCCESS, GET_POLICY_BY_PAN_FAIL, GET_POLICY_BY_PAN_REQUEST, GET_POLICY_BY_PAN_SUCCESS, SIGN_IN_FAIL, SIGN_IN_REQUEST, SIGN_IN_SUCCESS } from "../constants/AllConstants"


export const signInReducer = (state = {}, action) => {
    switch(action.type){

        case SIGN_IN_REQUEST:
            return{
                loading : true
            }
        case SIGN_IN_SUCCESS:
            return{
                loading : false,
                userInfo : action.payload
            }
        case SIGN_IN_FAIL:
            return{
                loading : false,
                error : action.payload
            }
        default : return state

    }
}



export const allPolocyReducer = (state = {allPolicyInfo:[]}, action) => {
    switch(action.type){

        case GET_ALL_POLICIES_REQUEST:
            return{
                loading : true
            }
        case GET_ALL_POLICIES_SUCCESS:
            return{
                loading : false,
                allPolicyInfo : action.payload
            }
        case GET_ALL_POLICIES_FAIL:
            return{
                loading : false,
                error : action.payload
            }
        default : return state

    }
}


export const allPolocyDetailsByPanReducer = (state={},action) => {
    switch(action.type){

        case GET_POLICY_BY_PAN_REQUEST:
            return{
                loading : true
            }
        case GET_POLICY_BY_PAN_SUCCESS:
            return{
                loading : false,
                allPolicyInfobyPan : action.payload
            }
        case GET_POLICY_BY_PAN_FAIL:
            return{
                loading : false,
                error : action.payload
            }
        default : return state

    }
}

