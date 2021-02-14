import { userAction } from "../../constant/constant"


export const formActions = {
    addUser,
    payment
}

async function addUser(userData) {
    return dispatch => {
        dispatch(success(userData));
    };
    function success(data) { 
        return { type: userAction.ADDRESS_DATA, data 
        } }
}
function payment(userData) {
    return dispatch => {
        dispatch(success(userData));
    };
    function success(data) { return { type: userAction.PAYMENT, data } }
}
