
import { combineReducers } from 'redux';
import {usersReducer} from './Users/slices/usersSlice';
import {alertReducer} from './Alert/slices/alertSlice';

export const rootReducer = combineReducers({
    usersReducer,
    alertReducer,
})