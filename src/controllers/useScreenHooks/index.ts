import useRegister from './register';
import useLogin from './login';
import useWelcome from './welcome';

const useScreenHooks = () => {
    return {
        useRegister,
        useLogin,
        useWelcome
    };
};

export default useScreenHooks;