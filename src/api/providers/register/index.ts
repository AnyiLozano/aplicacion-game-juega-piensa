import axios from "axios";
import { IRegister } from '../../../models/interfaces/register';

const useRegisterProviders = () => {
    const registerUser = (data: IRegister) : Promise<any> => {
        return axios({
            method: 'POST',
            url: 'http://192.168.1.5:8000/api/auth/register',
            data
        })
    }

    return {
        registerUser,
    }
};

export default useRegisterProviders;