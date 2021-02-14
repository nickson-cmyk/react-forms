import { userAction } from "../constant/constant";

export const initialState = {}
    // list: [
        // {user:'dinesh'},
        // {username: 'naveen'},
        // {username: 'veera'},
        // {username: 'srinath'},
    // ],
    // list1:[]


export function users(state = initialState, action) {
    console.log("data ===", action.data)
    switch (action.type) {
        case userAction.ADDRESS_DATA:
            return  {
                ...state,
                 ...action.data
            };
            case userAction.PAYMENT:
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