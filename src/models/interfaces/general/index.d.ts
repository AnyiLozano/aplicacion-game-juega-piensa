export interface ICallback {
    onSuccess: (data?: any) => void;
    onError: (data?: any) => void;
}

export interface IGeneralProps {
    navigation: any;
}