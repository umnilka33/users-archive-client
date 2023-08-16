import axios from 'axios';
import { IUser, IUsersState } from "../types/types";

export class UserApi {
    static async createUser(user: Partial<IUser>):Promise<IUsersState[]> {
        const res = await axios.post('http://localhost:3002/users/', user);
        return res.data;
    }
    static async deleteUser(id: string):Promise<void> {
        await axios.delete(`http://localhost:3002/users/${id}`);
    }
    static async getUsers():Promise<IUsersState[]> {
        const res = await axios.get('http://localhost:3002/users/');
        console.log('res', res);
        
        return res.data;
    }
}
