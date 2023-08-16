import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAlertState } from "../../../types/types"

const initialState: IAlertState = {
    alertText: '',
    alertStatus: undefined,
};

export const alertSlice = createSlice({
    name: 'Alert',
    initialState,
    reducers: {
        showAlert: (state, action: PayloadAction<IAlertState>) => {
            state.alertText = action.payload.alertText;
            state.alertStatus = action.payload.alertStatus;
        },
        hideAlert: (state) => {
            state.alertText = '';
            state.alertStatus = undefined;
            console.log('alert closed')
        },
    },
});

export const { actions: alertActions } = alertSlice;
export const { reducer: alertReducer } = alertSlice;
