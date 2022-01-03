import { useDispatch } from "react-redux";
import useRegisterActions from './register';
import useLoginActions from './login';

const useActions = () => {
    const dispatch = useDispatch();

    return {
        dispatch,
        useRegisterActions,
        useLoginActions
    };
};

export default useActions;