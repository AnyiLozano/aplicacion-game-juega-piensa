import useApi from '../../../api';
import { useForm } from 'react-hook-form';
import { IActionLogin } from '../../../models/interfaces/login';
import useModels from '../../../models';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const useLogin = (navigation: any) => {
    //useform
    const { control, handleSubmit, reset } = useForm({
        mode: "onChange"
    });

    // Actions 
    const { useActions } = useApi();
    const { dispatch, useLoginActions } = useActions();
    const { actLogin } = useLoginActions();

    const { useSelectors } = useModels();
    const { useLoginSelectors } = useSelectors();
    const { loginSelector } = useLoginSelectors();
    const { fullname } = useSelector(loginSelector);

    //handlers
    const handleLogin = (data: any) => {
        console.log(data)
        const request : IActionLogin = {
            fullname: data.fullname,
            onError: () => {},
            onSuccess: () => {  
                navigation.navigate('Welcome')
            }
        };

        dispatch(actLogin(request));
    }

    useEffect(() => {
        reset({
            fullname: fullname
        })
    }, [reset])

    return {
        control,
        handleSubmit,
        handleLogin
    }
}

export default useLogin;