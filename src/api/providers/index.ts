import useRegisterProviders from './register';
import useLoginProviders from './login';

const useProviders = () => {
    
    return {
        useRegisterProviders,
        useLoginProviders
    };
};

export default useProviders;