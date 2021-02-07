import { USER_SIGNIN_FAILED, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT } from "../Constants/userConstants";

const initialState = {}

export const userSigninReducer = (state = initialState, action)=>{
    switch (action.type) {
        case USER_SIGNIN_REQUEST:
            
            return {loading: true}

        case USER_SIGNIN_SUCCESS:

            return {loading: false, userInfo: action.payload};
        
        case USER_SIGNIN_FAILED:
            
            return {loading: false, error: action.payload}

        case USER_SIGNOUT:

            return {};
    
        default:
           return state;
    }
}