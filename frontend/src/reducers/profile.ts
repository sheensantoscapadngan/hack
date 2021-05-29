import { CREATE_POST, LOAD_OWN_PROFILE, GET_PROFILE } from "./../actions/types";
const initialState = {
  user: {},
};

export default function (state = initialState, action: any) {
  const { type, payload } = action;
  switch (type) {
    case GET_PROFILE:
    case LOAD_OWN_PROFILE:
    case CREATE_POST:
      return {
        user: payload,
      };
    default:
      return state;
  }
}
