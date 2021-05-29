import { CREATE_POST } from "./types";
import axios from "axios";
import PostInterface from "../interfaces/PostInterface";

export const createPost = ({
    accessToken,
    authId,
    language,
    description,
    content,
}: PostInterface) => async (dispatch: any) => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Access-Token": accessToken,
            }
        }
        const body = {
            language,
            description,
            content,
        }
        const res = await axios.post(`/api/profile/${authId}`, body, config);
        dispatch({
            type: CREATE_POST,
            payload: res.data,
        })
    } catch (error) {
        console.error(error);
    }
}
