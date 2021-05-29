import { LOGIN_USER } from "./types";
import firebase from '../firebase/firebase';
import axios from "axios";

export const loginUser = () => async (dispatch: any) => {
    try {
        const provider = new firebase.auth.GoogleAuthProvider();
        const authResult = await firebase.auth().signInWithPopup(provider);
        const credential = authResult.credential as firebase.auth.OAuthCredential;
        if (!credential) return;
        const token = credential.accessToken;
        const user = authResult.user;
        
        const config = {
            headers: {
                "Content-Type": "application/json",
            }
        }
        const body = {
            email: user?.email,
            displayName: user?.displayName,
            authId: user?.uid,
            picture: user?.photoURL,
        }
        const res = await axios.post("/api/auth", body, config);
        dispatch({
            type: LOGIN_USER,
            payload: {
                user: res.data,
                accessToken: token,
            }
        })

    } catch (error) {
        console.error(error);
    }
}
