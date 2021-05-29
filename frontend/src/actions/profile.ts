import { GET_PROFILE } from "./types";
import axios from "axios";

export const getProfile = (authId: string) => async (dispatch: any) => {
    try {
        const res = await axios.get(`/api/profile/${authId}`);
        dispatch({
            type: GET_PROFILE,
            payload: res.data,
        })
    } catch (error) {
        console.error(error);
    }
}
