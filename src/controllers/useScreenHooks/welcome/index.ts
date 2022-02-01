import useApi from "../../../api";
import { useSelector } from "react-redux";
import useModels from "../../../models";
import { ICallback } from '../../../models/interfaces/general';
import { useEffect } from "react";

const useWelcome = (redirect?: any, redirectLogin? : any) => {
    const { useSelectors } = useModels();
    const { useLoginSelectors } = useSelectors();
    const { loginSelector, level1Selector, level2Selector } = useLoginSelectors();
    const login = useSelector(loginSelector);
    const level1 = useSelector(level1Selector);
    const level2 = useSelector(level2Selector);

    const { useActions } = useApi();
    const { dispatch, useLoginActions } = useActions();
    const { actLogout } = useLoginActions();
    
    const logout = () => {
        const request : ICallback = {
            onSuccess: () => {
                redirect && redirect()
            },
            onError: () => {},
        }

        dispatch(actLogout(request));
    }
    
    return {
        login,
        logout,
        level1,
        level2
    };
}

export default useWelcome;