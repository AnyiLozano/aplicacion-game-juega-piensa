import useRegister from './register';
import useLogin from './login';
import useWelcome from './welcome';
import useSettings from './settings';

const useScreenHooks = () => {
    return {
        useRegister,
        useLogin,
        useWelcome,
        useSettings
    };
};

export default useScreenHooks;