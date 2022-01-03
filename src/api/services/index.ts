import useRegisterServices from './register';
import useLoginServices from './login';

const useServices = () => {
    return {
        useRegisterServices,
        useLoginServices
    };
};

export default useServices;