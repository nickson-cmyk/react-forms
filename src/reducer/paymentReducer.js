import { userAction } from "../constant/constant";

export const initialState = {
}
    // list: [
        // {user:'dinesh'},
        // {username: 'naveen'},
        // {username: 'veera'},
        // {username: 'srinath'},
    // ],
    // list1:[]


export default function payment(state = initialState, action) {
    console.log("data ===", action.data)
    switch (action.type) {
            case "PAY":
                return {
                    // list1: [
                        ...state,
                        ...action.data
                    // ]
                };
       
        default: {
            return state;
        }
    }
}