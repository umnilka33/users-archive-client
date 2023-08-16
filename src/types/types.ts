import { AlertColor } from "@mui/material"

export enum IUserActionTypes {
    CREATE_USER = "CREATE_USER",
    GET_USERS = "GET_USERS",
    DELETE_USER = "DELETE_USER"
}

export interface IUser {
    id?: string,
    firstname: string,
    patronymic: string,
    lastname: string,
    phone: string,
    email: string,
    gender: string,
}

export interface IUsersState {
    users: IUser[],
    isLoading: boolean,
}

export interface IUserReducer {
    usersReducer: IUsersState
}

export interface IUserResponse {
    id: string,
    firstname: string,
    patronymic: string,
    lastname: string,
    phone: string,
    email: string,
    gender: string,
    createdAt: string,
    updatedAt: string,
}

export interface IAlertState {
    alertText: string,
    alertStatus: AlertColor | undefined,
}
export interface IAlertReducer {
    alertReducer: IAlertState
}