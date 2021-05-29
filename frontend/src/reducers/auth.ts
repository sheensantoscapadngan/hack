import { LOGIN_USER } from './../actions/types';
const initialState = {
    user: {},
    accessToken: "",
}

export default function(state = initialState, action: any) {
    const { type, payload } = action;
    switch(type) {
        case LOGIN_USER: 
            return {
                user: payload.user,
                accessToken: payload.accessToken,
            }
        default:
            return initialState
    }
}
