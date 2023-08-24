import axios from 'axios';
import { IUser, IUsersState } from "../types/types";
import { decode } from '@msgpack/msgpack';

const DecodeResponse = (data:Uint8Array) => {
    const decoded = decode(Object.values(data));
        return decoded as IUsersState[]
}

export class UserApi {
    static async createUser(user: Partial<IUser>):Promise<IUsersState[]> {
        const res = await axios.post('http://192.168.201.20:2022/users/', user);
        return DecodeResponse(res.data);
    }
    static async deleteUser(id: string):Promise<void> {
        await axios.delete(`http://192.168.201.20:2022/users/${id}`);
    }
    static async getUsers():Promise<IUsersState[]> {
        const res = await axios.get('http://192.168.201.20:2022/users/', {
            headers: {'Content-Type': 'application/x-msgpack'},
            data: {}
        });

        return DecodeResponse(res.data);
    }
}
