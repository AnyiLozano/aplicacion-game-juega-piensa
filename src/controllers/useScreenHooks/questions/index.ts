import { useCallback, useEffect, useState } from "react";

const useQuestions = () => {
    // Variables
    let downTime: number = 15;

    // states
    const [time, setTime] = useState<number>(15);
    const [showAlert, setShowAlert] = useState<boolean>(false);
    const [showAlertTimeout, setShowAlertTimeout] = useState<boolean>(false);
    const [showAlertError, setShowAlertError] = useState<boolean>(false);

    const downTimeHandler = useCallback(() => {
        const timer = setInterval(() => {
            if(downTime === 0){
                clearInterval(timer);
                setShowAlertTimeout(true);
            }

            setTime(downTime--)
        }, 1000)
    }, [downTime]);

    const handleResponse = (res: any) => {
        if(res === "incorrect"){
            setShowAlertError(true);
            console.log(res)
        }else{
            setShowAlert(true);
        }
    }

    useEffect(() => {
        downTimeHandler();
    }, [downTimeHandler]);

    return {
        time,
        showAlert,
        showAlertTimeout,
        showAlertError,
        handleResponse
    }
}

export default useQuestions;