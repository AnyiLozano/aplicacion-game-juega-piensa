import createReducer from "../createReducer";
import { LOGIN } from '../../../types/index';

const useLoginReducers = () => {
    const login = createReducer(
        {
            token: "",
            user: {}
        },
        {
            [LOGIN](state: any, action: any) {
                return {
                    ...state,
                    ...action.payload
                }
            }
        }
    );

    const level1 = createReducer(
        { level1: false },
        {
            "SET_LEVEL1"(state: any, action: any) {
                return {
                    ...state,
                    ...action.payload
                }
            }
        });

    const level2 = createReducer(
        { level2: false },
        {
            "SET_LEVEL2"(state: any, action: any) {
                return {
                    ...state,
                    ...action.payload
                }
            }
        })

    const level3 = createReducer(
        { level3: false },
        {
            "SET_LEVEL3"(state: any, action: any) {
                return {
                    ...state,
                    ...action.payload
                }
            }
        })

    return {
        login,
        level1,
        level2,
        level3
    }
}

export default useLoginReducers;