import useRegisterProviders from './register';
import useLoginProviders from './login';
import axios from 'axios';
import useSettingsProviders from './settings';

const useProviders = () => {
    axios.defaults.baseURL = "http://192.168.1.8:8000/api";
    
    return {
        useRegisterProviders,
        useLoginProviders,
        useSettingsProviders
    };
};

export default useProviders;