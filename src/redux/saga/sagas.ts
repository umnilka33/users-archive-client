import { PayloadAction } from '@reduxjs/toolkit'
import { call, Effect, put, takeEvery } from 'redux-saga/effects'
import { UserApi } from '../../api';
import { IUser, IUserActionTypes, IUserResponse } from '../../types/types';
import { alertActions } from '../Alert/slices/alertSlice';
import { usersActions } from '../Users/slices/usersSlice';

const delay = (time: number) => new Promise(resolve => setTimeout(resolve, time))

function* sagaCreateUser(action: PayloadAction<IUser>): Generator<Effect, void> {
    try {
        const user: IUserResponse = (yield call(UserApi.createUser, action.payload)) as IUserResponse;
        const userObject: IUser = {
            id: user.id,
            firstname: user.firstname,
            lastname: user.lastname,
            patronymic: user.patronymic,
            phone: user.phone,
            email: user.email,
            gender: user.gender,
        }
        yield put(usersActions.addUser(userObject))
        yield put(alertActions.showAlert({
            alertText: 'Пользователь успешно добавлен', 
            alertStatus:'success'
        }));
        yield call(delay, 3000)
        yield put(alertActions.hideAlert())
    } catch (error) {
        yield put(alertActions.showAlert({
            alertText: `Не удалось добавить пользователя: ${error}`, 
            alertStatus:'warning'
        }));
    }
}
function* sagaDeleteUser(action: PayloadAction<string>): Generator<Effect, void> {
    try {
        yield call(UserApi.deleteUser, action.payload)
        yield put(usersActions.deleteUser(action.payload))
        yield put(alertActions.showAlert({
            alertText: 'Пользователь успешно удален', 
            alertStatus:'success'
        }));
    } catch (error) {
        yield put(alertActions.showAlert({
            alertText: `Не удалось удалить пользователя: ${error}`, 
            alertStatus:'warning'
        }));
    }
}
function* sagaGetUsers(): Generator<Effect, void, IUser[]> {
    try {
        const users = yield call(UserApi.getUsers);
        const usersArray = users.map((user)=>{
            return {
                id: user.id,
                firstname: user.firstname,
                lastname: user.lastname,
                patronymic: user.patronymic,
                phone: user.phone,
                email: user.email,
                gender: user.gender,
            }
        });
        yield put(usersActions.setUsers(usersArray));
    } catch (error) {
        yield put(alertActions.showAlert({
            alertText: `Не удалось загрузить данные: ${error}`, 
            alertStatus:'warning'
        }));
    }
}
export function* sagaWatcher(): Generator<Effect, void> {
    yield takeEvery(IUserActionTypes.CREATE_USER, sagaCreateUser)
    yield takeEvery(IUserActionTypes.DELETE_USER, sagaDeleteUser)
    yield takeEvery(IUserActionTypes.GET_USERS, sagaGetUsers)
}