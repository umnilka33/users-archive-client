import { Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/Users";
import { IUserActionTypes } from "../../types/types";
import { UserCard } from "../UserCard/UserCard";

export const UserList = () => {
    const usersArray = useSelector(getUsers);
    const dispatch = useDispatch();
    const handleDeleteUser = (id: string) => {
        dispatch({type: IUserActionTypes.DELETE_USER, payload: id})
    }

    return (
        <Stack gap="30px" direction="row" flexWrap="wrap" sx={{width: '810px'}}>
            {usersArray.map((item)=>
            <UserCard key={item.id} user={item} onDelete={handleDeleteUser}/>
            )}
            {usersArray.length?null:'Нет пользователей'}
        </Stack>
    )
}