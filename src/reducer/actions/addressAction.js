import axios from 'axios'


export function address(data) {
    return dispatch => {
        dispatch(success(data));
    };
    function success(data) { return { type: "ADDRESS", data } }
}