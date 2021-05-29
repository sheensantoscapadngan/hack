import { LOGIN_USER } from "./../actions/types";
const initialState = {
  authId: "",
  accessToken: "",
  isAuthenticated: false,
};

export default function (state = initialState, action: any) {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_USER:
      return {
        authId: payload.authId,
        accessToken: payload.accessToken,
        isAuthenticated: true,
      };
    default:
      return state;
  }
}
