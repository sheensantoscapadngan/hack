import { LOGIN_USER } from './../actions/types';
const initialState = {
    authId: "",
    accessToken: "",
}

export default function(state = initialState, action: any) {
    const { type, payload } = action;
    switch(type) {
        case LOGIN_USER: 
            return {
                authId: payload.authId,
                accessToken: payload.accessToken,
            }
        default:
            return state;
    }
}
