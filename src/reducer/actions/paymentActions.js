import axios from 'axios'


export function payment(data) {
    return dispatch => {
        dispatch(success(data));
    };
    function success(data) { return { type: "PAY", data } }
}


export const final = (data) => async dispatch => { 
    try{
    let resData = await axios.post(`http://localhst:3010/payment`, data);
    if (resData && resData.data) {
        console.log(resData.data)
    }
    } catch (e) {
        console.log(e)
    }
}
