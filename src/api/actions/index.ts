import { useDispatch } from "react-redux";
import useRegisterActions from './register';
import useLoginActions from './login';
import useSettingsActions from './settings';

const useActions = () => {
    const dispatch = useDispatch();

    return {
        dispatch,
        useRegisterActions,
        useLoginActions,
        useSettingsActions
    };
};

export default useActions;