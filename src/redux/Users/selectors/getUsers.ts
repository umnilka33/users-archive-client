import { IUserReducer } from "../../../types/types";

export const getUsers = (state: IUserReducer) => state.usersReducer.users;
