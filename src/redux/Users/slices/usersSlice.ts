import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser, IUserActionTypes, IUsersState } from "../../../types/types"

const initialState: IUsersState = {
    users: [],
    isLoading: false,
};

export const usersSlice = createSlice({
    name: 'Users',
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<IUser>) => {
            state.users.push(action.payload);
            state.isLoading = false;
        },
        deleteUser: (state, action: PayloadAction<string>) => {
            state.users = state.users.filter((item) => item.id !== action.payload);
            state.isLoading = false;
        },
        setUsers: (state, action: PayloadAction<IUser[]>) => {
            state.users = action.payload;
            state.isLoading = false;
        },
    },
    extraReducers:(builder) => {
        builder
        .addCase(IUserActionTypes.CREATE_USER, (state) => {
            state.isLoading = true;
        })
        .addCase(IUserActionTypes.DELETE_USER, (state) => {
            state.isLoading = true;
        })
        .addCase(IUserActionTypes.GET_USERS, (state) => {
            state.isLoading = true;
        })
}
});

export const { actions: usersActions } = usersSlice;
export const { reducer: usersReducer } = usersSlice;
