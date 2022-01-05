import useRegisterServices from './register';
import useLoginServices from './login';
import useSettingsServices from './settings';

const useServices = () => {
    return {
        useRegisterServices,
        useLoginServices,
        useSettingsServices,
    };
};

export default useServices;