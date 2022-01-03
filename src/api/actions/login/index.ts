import { Dispatch } from "redux";
import { IActionLogin } from "../../../models/interfaces/login";
import useServices from "../../services";
import { LOGIN } from '../../../types';
import { ICallback } from "models/interfaces/general";

const useLoginActions = () => {
    // Services
    const { useLoginServices } = useServices();
    const { loginServices } = useLoginServices();

    // Actions 
    const actLogin = (request: IActionLogin) => async(dispatch: Dispatch) => {
        const { fullname, onError, onSuccess } = request;
        try {
            const res = await loginServices(fullname);
            const { data } = res.data;

            dispatch({
                type: LOGIN,
                payload: data
            });

            onSuccess && onSuccess();
        } catch (error) {
            onError && onError();
        }
    }

    const actLogout = (request: ICallback) => async(dispatch: Dispatch) => {
        const { onError, onSuccess } = request;
        try {
            dispatch({
                type: LOGIN,
                payload: {
                    token: "",
                    user: {}
                }
            });

            onSuccess && onSuccess();
        } catch (error) {
            onError && onError();
        }
    }

    return {
        actLogin,
        actLogout
    }
};

export default useLoginActions;