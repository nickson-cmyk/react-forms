import { compose, createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import {users} from '../reducer/reducer';
import {userAction } from "../constant/constant"
// import { constantValue } from '../constant/constant';

const rootReducer = (state, payload) => {
    if (payload.type === userAction.LOGOUT) {
        payload = undefined
    }

    return users(state, payload)
}

const enhancer = compose(
    applyMiddleware(
        thunkMiddleware,
        logger
    ),
    // persistState(),
  )

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        enhancer
    )
}