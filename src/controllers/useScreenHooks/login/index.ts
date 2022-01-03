import useApi from '../../../api';
import { useForm } from 'react-hook-form';
import { IActionLogin } from '../../../models/interfaces/login';

const useLogin = (navigation: any) => {
    //useform
    const { control, handleSubmit, reset } = useForm({
        mode: "onChange"
    });

    // Actions 
    const { useActions } = useApi();
    const { dispatch, useLoginActions } = useActions();
    const { actLogin } = useLoginActions();

    //handlers
    const handleLogin = (data: any) => {
        console.log(data)
        const request : IActionLogin = {
            fullname: data.fullname,
            onError: () => {},
            onSuccess: () => {
                reset({
                    fullname: ""
                })
                navigation.navigate('Welcome')
            }
        };

        dispatch(actLogin(request));
    }

    return {
        control,
        handleSubmit,
        handleLogin
    }
}

export default useLogin;