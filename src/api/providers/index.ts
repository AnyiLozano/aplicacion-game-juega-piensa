import useRegisterProviders from './register';
import useLoginProviders from './login';
import axios from 'axios';
import useSettingsProviders from './settings';

const useProviders = () => {
    axios.defaults.baseURL = "http://uvamin-api.seranest-interactiva.com/api";
    
    return {
        useRegisterProviders,
        useLoginProviders,
        useSettingsProviders
    };
};

export default useProviders;