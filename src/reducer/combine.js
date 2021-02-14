import {combineReducers} from"redux"
import payment from"./paymentReducer"
import address from"./addressReducer"
 const rootReducer =combineReducers({
    payment: payment,
    address: address
});

export default rootReducer;