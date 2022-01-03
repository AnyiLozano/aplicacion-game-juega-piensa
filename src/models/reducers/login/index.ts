import createReducer from "../createReducer";
import { LOGIN } from '../../../types/index';

const useLoginReducers = () => {
    const login = createReducer(
        {
            token: "",
            user: {}
        },
        {
            [LOGIN](state: any, action: any){
                return {
                    ...state,
                    ...action.payload
                }
            }
        }
    );

    return {
        login
    }
}

export default useLoginReducers;