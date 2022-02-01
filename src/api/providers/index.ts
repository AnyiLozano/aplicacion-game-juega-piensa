import useRegisterProviders from './register';
import useLoginProviders from './login';
import axios from 'axios';
import useSettingsProviders from './settings';

const useProviders = () => {
    axios.defaults.baseURL = "http://api-game-uvamin.emlproyectos.com.co/api";
    
    return {
        useRegisterProviders,
        useLoginProviders,
        useSettingsProviders
    };
};

export default useProviders;