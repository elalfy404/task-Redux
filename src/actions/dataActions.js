import axios from "axios";
import {
    FETCH_DATA_STARTED,
    FETCH_DATA_FAILURE,
    FETCH_DATA_SUCCESS,
} from "./actionTypes";

export const GetDataList = () => async (dispatch) => {
    try {
        dispatch({
            type: FETCH_DATA_STARTED,
            payload: {
                isLoading: true,
            },
        });

        const res = await axios.get(`https://megakheir.herokuapp.com/ngos`);

        dispatch({
            type: FETCH_DATA_SUCCESS,
            payload: res.data,
        });
    } catch (error) {
        dispatch({
            type: FETCH_DATA_FAILURE,
            payload: {
                error,
            },
        });
    }
};
