import axios from "axios";

const useLoginProviders = () => {
    const login = (fullname: string) : Promise<any> => {
        return axios.post('http://192.168.1.5:8000/api/auth/login', {
            fullname: fullname,
            password: "password"
        })
    }

    return {
        login
    };
}

export default useLoginProviders;