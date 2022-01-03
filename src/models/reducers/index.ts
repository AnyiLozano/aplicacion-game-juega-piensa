import { combineReducers } from "@reduxjs/toolkit";
import useTestReducers from "./test";
import useLoginReducers from './login';

const useReducers = () => {
    //Reducers
    const { test } = useTestReducers();
    const { login } = useLoginReducers();

    return combineReducers(
        Object.assign({
            test,
            login
        })
    );
};

export default useReducers;