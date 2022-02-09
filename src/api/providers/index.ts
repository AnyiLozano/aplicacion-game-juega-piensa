import useRegisterProviders from './register';
import useLoginProviders from './login';
import axios from 'axios';
import useSettingsProviders from './settings';
import useGeneralProviders from './general';

const useProviders = () => {
    axios.defaults.baseURL = "http://192.168.10.14:8000/api";
    
    return {
        useRegisterProviders,
        useLoginProviders,
        useSettingsProviders,
        useGeneralProviders
    };
};

export default useProviders;